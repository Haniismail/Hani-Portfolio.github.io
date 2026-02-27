import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            About
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-foreground leading-snug mb-8">
            {portfolio.bio}
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} />
              {portfolio.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail size={16} />
              {portfolio.email}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
