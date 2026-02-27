import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type Language, getPortfolio } from "../data/portfolio";

type LanguageContextType = {
    lang: Language;
    setLang: (lang: Language) => void;
    t: ReturnType<typeof getPortfolio>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLangState] = useState<Language>(() => {
        // 1. User's explicit choice takes priority
        const saved = localStorage.getItem("portfolio-lang");
        if (saved === "fr" || saved === "en") return saved;

        // 2. Auto-detect from browser language (fr, fr-FR, fr-CA, etc.)
        const browserLang = navigator.language?.toLowerCase() ?? "";
        if (browserLang.startsWith("fr")) return "fr";

        // 3. Default to English
        return "en";
    });

    const setLang = (l: Language) => {
        setLangState(l);
        localStorage.setItem("portfolio-lang", l);
    };

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const t = getPortfolio(lang);

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
    return ctx;
};
