import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud } from "lucide-react";
import { portfolio } from "../data/portfolio";

const icons = [Code2, Server, Database, Cloud];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Skills
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-foreground">
            Technical Expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolio.skills.map((skill, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
