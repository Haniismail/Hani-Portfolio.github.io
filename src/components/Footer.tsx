import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t.name}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          {t.sections.footerBuilt}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
