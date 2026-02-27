import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Career from "../components/Career";
import Testimonials from "../components/Testimonials";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import Terminal from "../components/Terminal";

const Index = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);

  /* Close terminal on Escape key */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && terminalOpen) {
        setTerminalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [terminalOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onTerminalToggle={() => setTerminalOpen(true)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Career />
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Chatbot />

      {/* Terminal overlay */}
      <AnimatePresence>
        {terminalOpen && (
          <Terminal onClose={() => setTerminalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
