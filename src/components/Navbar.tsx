import { useState, useEffect } from "react";
import { Menu, X, TerminalSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  onTerminalToggle: () => void;
}

const Navbar = ({ onTerminalToggle }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [terminalUsed, setTerminalUsed] = useState(false);
  const { t } = useLanguage();

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.career, href: "#career" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Show hint tooltip for first-time visitors */
  useEffect(() => {
    const seen = localStorage.getItem("terminal-hint-seen");
    if (!seen) {
      const timer = setTimeout(() => setShowHint(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (showHint) {
      const timer = setTimeout(() => {
        setShowHint(false);
        localStorage.setItem("terminal-hint-seen", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showHint]);

  const handleTerminalClick = () => {
    setShowHint(false);
    setTerminalUsed(true);
    localStorage.setItem("terminal-hint-seen", "true");
    onTerminalToggle();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-xl shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
          Hani<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* Terminal button with hint */}
          <div className="relative">
            <button
              onClick={handleTerminalClick}
              className={`${terminalUsed ? "" : "terminal-nav-btn "}p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200`}
              aria-label="Open terminal"
              title="Terminal mode"
            >
              <TerminalSquare size={18} />
            </button>

            {/* Tooltip hint */}
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="terminal-hint"
                >
                  <span className="terminal-hint-text">Try terminal mode! 🖥️</span>
                  <div className="terminal-hint-arrow" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <div className="relative">
            <button
              onClick={handleTerminalClick}
              className={`${terminalUsed ? "" : "terminal-nav-btn "}p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200`}
              aria-label="Open terminal"
            >
              <TerminalSquare size={18} />
            </button>
          </div>
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
