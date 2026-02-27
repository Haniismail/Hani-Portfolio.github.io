import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { portfolio } from "../data/portfolio";

const Testimonials = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Testimonials
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-foreground">
            What People Say
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-sm"
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium text-foreground text-sm">
                  {t.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
