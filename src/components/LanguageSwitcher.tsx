import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
    const { lang, setLang } = useLanguage();

    return (
        <div className="flex items-center gap-1.5">
            <button
                onClick={() => setLang("en")}
                className={`text-lg leading-none rounded-md px-1 py-0.5 transition-all duration-200 ${lang === "en"
                        ? "ring-2 ring-primary scale-110"
                        : "opacity-50 hover:opacity-80 hover:scale-105"
                    }`}
                aria-label="Switch to English"
                title="English"
            >
                🇬🇧
            </button>
            <button
                onClick={() => setLang("fr")}
                className={`text-lg leading-none rounded-md px-1 py-0.5 transition-all duration-200 ${lang === "fr"
                        ? "ring-2 ring-primary scale-110"
                        : "opacity-50 hover:opacity-80 hover:scale-105"
                    }`}
                aria-label="Passer en français"
                title="Français"
            >
                🇫🇷
            </button>
        </div>
    );
};

export default LanguageSwitcher;
