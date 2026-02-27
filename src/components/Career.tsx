import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

const Career = () => {
  return (
    <section id="career" className="py-32 px-6 bg-muted">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Career
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-foreground">
            Experience
          </p>
        </motion.div>

        <div className="space-y-0">
          {portfolio.career.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border"
            >
              <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-primary" />
              <p className="text-xs font-medium text-primary tracking-wider uppercase mb-1">
                {role.period}
              </p>
              <h3 className="text-lg font-semibold text-foreground">
                {role.role}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {role.company}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
