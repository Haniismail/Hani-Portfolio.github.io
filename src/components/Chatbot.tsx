import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "../data/portfolio";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: "Hi! 👋 I'm Hani's assistant. Pick a question below or type your own." },
  ]);
  const [input, setInput] = useState("");
  const [askedQuestions, setAskedQuestions] = useState<Set<string>>(new Set());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleQuestion = (q: string, a: string) => {
    setAskedQuestions((prev) => new Set(prev).add(q));
    setMessages((prev) => [...prev, { from: "user", text: q }, { from: "bot", text: a }]);
  };

  const handleCustom = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text: input },
      {
        from: "bot",
        text: `For custom questions, please reach out directly at ${portfolio.email} 📬`,
      },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center"
        aria-label="Chat"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center"
          >
            {open ? <X size={22} /> : <MessageCircle size={22} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[22rem] bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
            style={{ maxHeight: "32rem" }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <MessageCircle size={15} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm leading-none">Hani's Assistant</p>
                <p className="text-xs text-muted-foreground mt-0.5">Ask me anything</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm min-h-0">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <span
                    className={`inline-block max-w-[80%] px-3.5 py-2 rounded-2xl whitespace-pre-line leading-relaxed ${
                      msg.from === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}
            <div className="px-4 py-3 border-t border-border space-y-1.5 overflow-y-auto" style={{ maxHeight: "9rem" }}>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-2">Suggested questions</p>
              {portfolio.chatbot.questions.filter((qa) => !askedQuestions.has(qa.q)).map((qa, i) => (
                <button
                  key={i}
                  onClick={() => handleQuestion(qa.q, qa.a)}
                  className="block w-full text-left text-xs px-3 py-2 rounded-xl bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {qa.q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCustom()}
                placeholder="Type a message..."
                className="flex-1 text-sm px-3.5 py-2 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button
                onClick={handleCustom}
                className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity shrink-0"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
