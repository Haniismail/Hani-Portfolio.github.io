import { motion } from "framer-motion";
import { Mail, Linkedin, Github, BookOpen } from "lucide-react";
import { portfolio } from "../data/portfolio";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Contact
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Let's Work Together
          </p>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm currently available for freelance projects and consulting. 
            Feel free to reach out if you have a project in mind.
          </p>

          <a
            href={`mailto:${portfolio.email}`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity mb-10"
          >
            <Mail size={16} />
            Get in Touch
          </a>

          <div className="flex items-center justify-center gap-6 mt-4">
            <a
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-border transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={portfolio.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-border transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={portfolio.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-border transition-colors"
              aria-label="Medium"
            >
              <BookOpen size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
