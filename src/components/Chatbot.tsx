import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Loader2, Mic, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

type Message = { from: "bot" | "user"; text: string };

/* ── Speech Recognition API ── */
const getSpeechRecognition = (): any => {
  const w = window as any;
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
};

const Chatbot = () => {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: t.sections.chatGreeting },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  /* ── Check speech support on mount ── */
  useEffect(() => {
    setSpeechSupported(!!getSpeechRecognition());
  }, []);

  /* ── Update greeting on language change ── */
  useEffect(() => {
    setMessages((prev) => [
      { from: "bot", text: t.sections.chatGreeting },
      ...prev.slice(1),
    ]);
  }, [t.sections.chatGreeting]);

  /* ── Auto-scroll ── */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ── Build conversation history ── */
  const buildHistory = (msgs: Message[]) =>
    msgs.slice(1).map((m) => ({
      role: m.from === "user" ? "user" : "assistant",
      content: m.text,
    }));

  /* ── Speak text with ElevenLabs (fallback to browser TTS) ── */
  const speakText = useCallback(
    async (text: string) => {
      // Stop any ongoing speech
      stopSpeaking();

      setSpeaking(true);

      try {
        // Try ElevenLabs first
        const res = await fetch("/api/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, lang }),
        });

        if (res.ok) {
          const blob = await res.blob();
          const url = URL.createObjectURL(blob);
          const audio = new Audio(url);
          audioRef.current = audio;

          audio.onended = () => {
            setSpeaking(false);
            URL.revokeObjectURL(url);
          };
          audio.onerror = () => {
            setSpeaking(false);
            URL.revokeObjectURL(url);
          };

          await audio.play();
          return;
        }
      } catch {
        // ElevenLabs failed, fall through to browser TTS
      }

      // Fallback: browser SpeechSynthesis
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === "fr" ? "fr-FR" : "en-US";
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.onend = () => setSpeaking(false);
        utterance.onerror = () => setSpeaking(false);
        window.speechSynthesis.speak(utterance);
      } else {
        setSpeaking(false);
      }
    },
    [lang]
  );

  /* ── Stop speaking ── */
  const stopSpeaking = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  };

  /* ── Send message to API ── */
  const sendToGemini = async (userText: string, autoSpeak = false) => {
    const userMsg: Message = { from: "user", text: userText };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: buildHistory(updatedMessages) }),
      });
      const data = await res.json();
      const reply =
        data.reply ??
        `Error: ${data.error ?? "No response"} — ${JSON.stringify(data.raw ?? {})}`;

      setMessages((prev) => [...prev, { from: "bot", text: reply }]);

      if (autoSpeak) {
        speakText(reply);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: t.sections.chatError },
      ]);
    } finally {
      setLoading(false);
    }
  };

  /* ── Handle typed input ── */
  const handleCustom = () => {
    if (!input.trim() || loading) return;
    const text = input.trim();
    setInput("");
    sendToGemini(text);
  };

  /* ── Voice input ── */
  const startListening = () => {
    const SpeechRecognitionClass = getSpeechRecognition();
    if (!SpeechRecognitionClass) return;

    if (listening && recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
      return;
    }

    const recognition = new SpeechRecognitionClass();
    recognition.lang = lang === "fr" ? "fr-FR" : "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      if (transcript.trim()) {
        sendToGemini(transcript.trim(), true);
      }
      setListening(false);
    };

    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;
    recognition.start();
  };

  /* ── Bubbly orb animation (ChatGPT-style) ── */
  const SpeakingOrb = () => (
    <div className="flex justify-start">
      <div className="chatbot-orb-container">
        <div className="chatbot-orb chatbot-orb-1" />
        <div className="chatbot-orb chatbot-orb-2" />
        <div className="chatbot-orb chatbot-orb-3" />
      </div>
    </div>
  );

  /* ── Typing dots animation ── */
  const ThinkingDots = () => (
    <div className="flex justify-start">
      <span className="inline-flex items-center gap-1 px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-muted">
        <span className="chatbot-dot chatbot-dot-1" />
        <span className="chatbot-dot chatbot-dot-2" />
        <span className="chatbot-dot chatbot-dot-3" />
      </span>
    </div>
  );

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => {
          setOpen(!open);
          if (open) stopSpeaking();
        }}
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
              <div className="flex-1">
                <p className="font-semibold text-foreground text-sm leading-none">
                  {t.sections.chatTitle}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t.sections.chatPowered}
                </p>
              </div>
              {speaking && (
                <button
                  onClick={stopSpeaking}
                  className="p-1.5 rounded-lg text-primary hover:bg-primary/10 transition-colors"
                  aria-label="Stop speaking"
                  title="Stop speaking"
                >
                  <VolumeX size={16} />
                </button>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm min-h-0">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`inline-block max-w-[80%] ${msg.from === "user" ? "" : "group"}`}
                  >
                    <span
                      className={`inline-block px-3.5 py-2 rounded-2xl whitespace-pre-line leading-relaxed ${msg.from === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-muted text-foreground rounded-bl-sm"
                        }`}
                    >
                      {msg.text}
                    </span>
                    {/* Speak button on bot messages */}
                    {msg.from === "bot" && i > 0 && (
                      <button
                        onClick={() => speakText(msg.text)}
                        className="ml-1 opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity p-0.5 text-muted-foreground"
                        aria-label="Read aloud"
                        title="Read aloud"
                      >
                        <Volume2 size={12} />
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* Thinking dots */}
              {loading && !speaking && <ThinkingDots />}

              {/* Speaking orb */}
              {speaking && <SpeakingOrb />}

              {/* Listening indicator */}
              {listening && (
                <div className="flex justify-start">
                  <span className="chatbot-listening-pill">
                    <span className="chatbot-listening-wave">
                      <span className="chatbot-wave-bar chatbot-wave-1" />
                      <span className="chatbot-wave-bar chatbot-wave-2" />
                      <span className="chatbot-wave-bar chatbot-wave-3" />
                      <span className="chatbot-wave-bar chatbot-wave-4" />
                      <span className="chatbot-wave-bar chatbot-wave-5" />
                    </span>
                    {t.sections.chatListening}
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCustom()}
                placeholder={
                  listening
                    ? t.sections.chatListening
                    : t.sections.chatPlaceholder
                }
                disabled={loading || listening}
                className="flex-1 text-sm px-3.5 py-2 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50"
              />

              {/* Mic button */}
              {speechSupported && (
                <button
                  onClick={startListening}
                  disabled={loading}
                  className={`p-2.5 rounded-xl transition-all duration-200 shrink-0 disabled:opacity-40 ${listening
                      ? "chatbot-mic-listening"
                      : "bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10"
                    }`}
                  aria-label={listening ? "Stop listening" : "Voice input"}
                  title={listening ? "Stop listening" : "Voice input"}
                >
                  <Mic size={14} />
                </button>
              )}

              {/* Send button */}
              <button
                onClick={handleCustom}
                disabled={loading || !input.trim() || listening}
                className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity shrink-0 disabled:opacity-40"
              >
                {loading ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <Send size={14} />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
