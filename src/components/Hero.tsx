import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { portfolio } from "../data/portfolio";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-medium mb-4 text-sm tracking-widest uppercase"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6"
        >
          {portfolio.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {portfolio.title}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href={portfolio.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors inline-flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={20} className="mx-auto animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
