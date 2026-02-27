import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

/* ──────────────────── ASCII art logo ──────────────────── */
const ASCII_LOGO = `
 ██╗  ██╗ █████╗ ███╗   ██╗██╗
 ██║  ██║██╔══██╗████╗  ██║██║
 ███████║███████║██╔██╗ ██║██║
 ██╔══██║██╔══██║██║╚██╗██║██║
 ██║  ██║██║  ██║██║ ╚████║██║
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝
`;

type Line = { type: "input" | "output" | "error" | "ascii" | "divider"; text: string };

interface TerminalProps {
    onClose: () => void;
}

const Terminal = ({ onClose }: TerminalProps) => {
    const { t, lang, setLang } = useLanguage();
    const [lines, setLines] = useState<Line[]>([]);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [historyIdx, setHistoryIdx] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    /* ──────────── auto-scroll ──────────── */
    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [lines]);

    /* ──────────── focus input on click anywhere ──────────── */
    const focusInput = () => inputRef.current?.focus();

    useEffect(() => {
        focusInput();
    }, []);

    /* ──────────── welcome message ──────────── */
    useEffect(() => {
        setLines([
            { type: "ascii", text: ASCII_LOGO },
            { type: "output", text: `  ${t.name} — ${t.shortTitle}` },
            { type: "output", text: "" },
            {
                type: "output", text: lang === "fr"
                    ? '  Tapez "help" pour voir les commandes disponibles.'
                    : '  Type "help" to see available commands.'
            },
            { type: "divider", text: "" },
        ]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* ──────────── command processor ──────────── */
    const processCommand = useCallback((cmd: string): Line[] => {
        const trimmed = cmd.trim().toLowerCase();
        const parts = trimmed.split(/\s+/);
        const command = parts[0];

        switch (command) {
            case "":
                return [];

            case "help":
                return [
                    { type: "output", text: "" },
                    { type: "output", text: "┌──────────────────────────────────────────────────┐" },
                    { type: "output", text: "│  📖  AVAILABLE COMMANDS                          │" },
                    { type: "output", text: "├──────────────────────────────────────────────────┤" },
                    { type: "output", text: "│  whoami      → Who is Hani?                      │" },
                    { type: "output", text: "│  about       → Bio & background                  │" },
                    { type: "output", text: "│  skills      → Technical expertise                │" },
                    { type: "output", text: "│  projects    → Project portfolio                  │" },
                    { type: "output", text: "│  career      → Work experience                   │" },
                    { type: "output", text: "│  education   → Degrees & certifications           │" },
                    { type: "output", text: "│  contact     → Get in touch                       │" },
                    { type: "output", text: "│  social      → Social media links                 │" },
                    { type: "output", text: "│  neofetch    → System info (the cool one)         │" },
                    { type: "output", text: "│  lang        → Toggle language (EN/FR)            │" },
                    { type: "output", text: "│  resume      → Open resume                        │" },
                    { type: "output", text: "│  date        → Current date & time                │" },
                    { type: "output", text: "│  echo <msg>  → Echo a message                     │" },
                    { type: "output", text: "│  clear       → Clear terminal                     │" },
                    { type: "output", text: "│  exit        → Exit terminal mode                 │" },
                    { type: "output", text: "└──────────────────────────────────────────────────┘" },
                    { type: "output", text: "" },
                ];

            case "whoami":
                return [
                    { type: "output", text: "" },
                    { type: "output", text: `  👤 ${t.name}` },
                    { type: "output", text: `  💼 ${t.title}` },
                    { type: "output", text: `  📍 ${t.location}` },
                    { type: "output", text: `  📧 ${t.email}` },
                    { type: "output", text: "" },
                ];

            case "about":
                return [
                    { type: "output", text: "" },
                    { type: "output", text: `  ${t.bio}` },
                    { type: "output", text: "" },
                ];

            case "skills": {
                const out: Line[] = [
                    { type: "output", text: "" },
                    { type: "output", text: "  ⚡ TECHNICAL SKILLS" },
                    { type: "output", text: "  ─────────────────────────────────────" },
                ];
                t.skills.forEach((s) => {
                    out.push({ type: "output", text: `  📂 ${s.category}` });
                    out.push({ type: "output", text: `     ${s.items.join(" · ")}` });
                    out.push({ type: "output", text: "" });
                });
                return out;
            }

            case "projects": {
                const out: Line[] = [
                    { type: "output", text: "" },
                    { type: "output", text: "  🚀 PROJECTS" },
                    { type: "output", text: "  ─────────────────────────────────────" },
                ];
                t.projects.forEach((p, i) => {
                    out.push({ type: "output", text: `  ${i + 1}. ${p.name}` });
                    out.push({ type: "output", text: `     ${p.description}` });
                    out.push({ type: "output", text: `     [${p.tags.join(", ")}]` });
                    out.push({ type: "output", text: "" });
                });
                return out;
            }

            case "career": {
                const out: Line[] = [
                    { type: "output", text: "" },
                    { type: "output", text: "  💼 CAREER" },
                    { type: "output", text: "  ─────────────────────────────────────" },
                ];
                t.career.forEach((c) => {
                    out.push({ type: "output", text: `  ● ${c.period} — ${c.role}` });
                    out.push({ type: "output", text: `    @ ${c.company}` });
                    out.push({ type: "output", text: `    ${c.description}` });
                    out.push({ type: "output", text: "" });
                });
                return out;
            }

            case "education":
            case "edu": {
                const out: Line[] = [
                    { type: "output", text: "" },
                    { type: "output", text: "  🎓 EDUCATION" },
                    { type: "output", text: "  ─────────────────────────────────────" },
                ];
                t.education.forEach((e) => {
                    out.push({ type: "output", text: `  📜 ${e.degree}` });
                    out.push({ type: "output", text: `     ${e.school} · ${e.period}` });
                    out.push({ type: "output", text: "" });
                });
                out.push({ type: "output", text: "  🏅 CERTIFICATIONS" });
                out.push({ type: "output", text: "  ─────────────────────────────────────" });
                t.certifications.forEach((c) => {
                    out.push({ type: "output", text: `  ✓ ${c}` });
                });
                out.push({ type: "output", text: "" });
                return out;
            }

            case "contact":
                return [
                    { type: "output", text: "" },
                    { type: "output", text: "  📬 CONTACT" },
                    { type: "output", text: "  ─────────────────────────────────────" },
                    { type: "output", text: `  📧 Email:    ${t.email}` },
                    { type: "output", text: `  🔗 LinkedIn: ${t.links.linkedin}` },
                    { type: "output", text: `  🐙 GitHub:   ${t.links.github}` },
                    { type: "output", text: `  📝 Medium:   ${t.links.medium}` },
                    { type: "output", text: "" },
                ];

            case "social":
                return [
                    { type: "output", text: "" },
                    { type: "output", text: "  🌐 SOCIAL LINKS" },
                    { type: "output", text: "  ─────────────────────────────────────" },
                    { type: "output", text: `  LinkedIn  → ${t.links.linkedin}` },
                    { type: "output", text: `  GitHub    → ${t.links.github}` },
                    { type: "output", text: `  Medium    → ${t.links.medium}` },
                    { type: "output", text: "" },
                ];

            case "neofetch":
                return [
                    { type: "output", text: "" },
                    { type: "output", text: "  ██╗  ██╗██╗        hani@portfolio" },
                    { type: "output", text: "  ██║  ██║██║        ──────────────────" },
                    { type: "output", text: "  ███████║██║        OS: Web · Montreal, Canada" },
                    { type: "output", text: "  ██╔══██║██║        Role: " + t.shortTitle },
                    { type: "output", text: "  ██║  ██║██║        XP: 4+ years" },
                    { type: "output", text: "  ╚═╝  ╚═╝╚═╝        Stack: React, Node, AWS" },
                    { type: "output", text: "                      Shell: TypeScript" },
                    { type: "output", text: "                      Editor: VS Code" },
                    { type: "output", text: `                      Lang: ${lang.toUpperCase()}` },
                    { type: "output", text: `                      Uptime: ${getUptime()}` },
                    { type: "output", text: "" },
                    { type: "output", text: "  " + "███".repeat(6) },
                    { type: "output", text: "" },
                ];

            case "lang":
                if (parts[1] === "fr" || parts[1] === "en") {
                    setLang(parts[1]);
                    return [{ type: "output", text: `  Language set to ${parts[1].toUpperCase()}.` }];
                }
                setLang(lang === "en" ? "fr" : "en");
                return [
                    { type: "output", text: `  Language toggled to ${lang === "en" ? "FR" : "EN"}.` },
                    { type: "output", text: '  Usage: lang [en|fr]' },
                ];

            case "resume":
                window.open(t.links.resume, "_blank");
                return [{ type: "output", text: "  📄 Opening resume..." }];

            case "date":
                return [{ type: "output", text: `  📅 ${new Date().toLocaleString()}` }];

            case "echo":
                return [{ type: "output", text: `  ${parts.slice(1).join(" ")}` }];

            case "clear":
                setLines([]);
                return [];

            case "exit":
            case "quit":
                onClose();
                return [];

            case "sudo":
                return [
                    { type: "error", text: "  🚫 Nice try. Hani is already root." },
                ];

            case "ls":
                return [
                    { type: "output", text: "" },
                    { type: "output", text: "  about.md    skills.json    projects/" },
                    { type: "output", text: "  career.md   education.md   contact.md" },
                    { type: "output", text: "  resume.pdf  .secret        README.md" },
                    { type: "output", text: "" },
                    { type: "output", text: '  💡 Try: about, skills, projects, career, education, contact' },
                    { type: "output", text: "" },
                ];

            case "cat":
                if (parts[1]) {
                    const file = parts[1].replace(/\.(md|json|txt)$/, "");
                    if (["about", "skills", "projects", "career", "education", "contact"].includes(file)) {
                        return processCommand(file);
                    }
                    if (file === ".secret" || file === "secret") {
                        return [
                            { type: "output", text: "" },
                            { type: "output", text: "  🥚 You found the secret file!" },
                            { type: "output", text: "  Hani's fun facts:" },
                            { type: "output", text: "  • Runs on coffee and ambient lo-fi beats" },
                            { type: "output", text: "  • Has debugged code at 3 AM more times than he'd admit" },
                            { type: "output", text: "  • Believes tabs > spaces (fight me)" },
                            { type: "output", text: "" },
                        ];
                    }
                    return [{ type: "error", text: `  cat: ${parts[1]}: No such file or directory` }];
                }
                return [{ type: "error", text: "  cat: missing file operand" }];

            case "pwd":
                return [{ type: "output", text: "  /home/hani/portfolio" }];

            case "cd":
                return [{ type: "output", text: "  There's nowhere else to go. You're already home. 🏠" }];

            case "rm":
                return [{ type: "error", text: "  🚫 I know what you're trying to do. Not today." }];

            case "hack":
            case "hacker":
                return [
                    { type: "output", text: "  ⚠️  INITIALIZING HACK..." },
                    { type: "output", text: "  ███████████░░░░  72%" },
                    { type: "output", text: "  Just kidding. Hire Hani instead. 😎" },
                ];

            case "hire":
                return [
                    { type: "output", text: "" },
                    { type: "output", text: "  🎉 Great choice! Here's how:" },
                    { type: "output", text: `  📧 ${t.email}` },
                    { type: "output", text: `  🔗 ${t.links.linkedin}` },
                    { type: "output", text: `  📄 Type "resume" to download my CV` },
                    { type: "output", text: "" },
                ];

            default:
                return [
                    { type: "error", text: `  command not found: ${command}` },
                    { type: "output", text: '  Type "help" for available commands.' },
                ];
        }
    }, [t, lang, setLang, onClose]);

    /* ──────────── handle enter ──────────── */
    const handleSubmit = () => {
        const cmd = input.trim();
        const inputLine: Line = { type: "input", text: cmd };

        if (cmd.toLowerCase() === "clear") {
            setLines([]);
            setInput("");
            setHistory((h) => [...h, cmd]);
            setHistoryIdx(-1);
            return;
        }

        const output = processCommand(cmd);
        setLines((prev) => [...prev, inputLine, ...output]);
        setInput("");

        if (cmd) {
            setHistory((h) => [...h, cmd]);
        }
        setHistoryIdx(-1);
    };

    /* ──────────── keyboard shortcuts ──────────── */
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSubmit();
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (history.length === 0) return;
            const newIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
            setHistoryIdx(newIdx);
            setInput(history[newIdx]);
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIdx === -1) return;
            const newIdx = historyIdx + 1;
            if (newIdx >= history.length) {
                setHistoryIdx(-1);
                setInput("");
            } else {
                setHistoryIdx(newIdx);
                setInput(history[newIdx]);
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            const cmds = ["help", "whoami", "about", "skills", "projects", "career", "education", "contact", "social", "neofetch", "lang", "resume", "date", "echo", "clear", "exit", "ls", "cat", "pwd", "hire"];
            const partial = input.toLowerCase();
            if (partial) {
                const match = cmds.find((c) => c.startsWith(partial));
                if (match) setInput(match);
            }
        } else if (e.key === "l" && e.ctrlKey) {
            e.preventDefault();
            setLines([]);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="terminal-overlay"
            onClick={focusInput}
        >
            <div className="terminal-window">
                {/* Title bar */}
                <div className="terminal-titlebar">
                    <div className="terminal-dots">
                        <button
                            onClick={onClose}
                            className="terminal-dot terminal-dot-red"
                            aria-label="Close terminal"
                        />
                        <span className="terminal-dot terminal-dot-yellow" />
                        <span className="terminal-dot terminal-dot-green" />
                    </div>
                    <span className="terminal-titlebar-text">hani@portfolio: ~</span>
                    <button
                        onClick={onClose}
                        className="terminal-close-btn"
                        aria-label="Close terminal"
                    >
                        <X size={14} />
                    </button>
                </div>

                {/* Content */}
                <div className="terminal-body" ref={scrollRef}>
                    {lines.map((line, i) => (
                        <div key={i} className={`terminal-line terminal-line-${line.type}`}>
                            {line.type === "input" ? (
                                <>
                                    <span className="terminal-prompt">
                                        <span className="terminal-user">hani</span>
                                        <span className="terminal-at">@</span>
                                        <span className="terminal-host">portfolio</span>
                                        <span className="terminal-colon">:</span>
                                        <span className="terminal-path">~</span>
                                        <span className="terminal-dollar">$</span>
                                    </span>
                                    {" "}{line.text}
                                </>
                            ) : line.type === "ascii" ? (
                                <pre className="terminal-ascii">{line.text}</pre>
                            ) : line.type === "divider" ? (
                                <div className="terminal-divider" />
                            ) : (
                                <span>{line.text}</span>
                            )}
                        </div>
                    ))}

                    {/* Active input line */}
                    <div className="terminal-line terminal-line-active">
                        <span className="terminal-prompt">
                            <span className="terminal-user">hani</span>
                            <span className="terminal-at">@</span>
                            <span className="terminal-host">portfolio</span>
                            <span className="terminal-colon">:</span>
                            <span className="terminal-path">~</span>
                            <span className="terminal-dollar">$</span>
                        </span>{" "}
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="terminal-input"
                            spellCheck={false}
                            autoComplete="off"
                            autoFocus
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

/* ──────────── helpers ──────────── */
function getUptime(): string {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const diff = Date.now() - start.getTime();
    const hours = Math.floor(diff / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    return `${hours}h ${mins}m`;
}

export default Terminal;
