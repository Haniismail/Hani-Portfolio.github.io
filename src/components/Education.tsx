import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Education = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 bg-muted">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            {t.sections.educationTitle}
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-foreground">
            {t.sections.educationSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-primary" />
              <h3 className="font-semibold text-foreground">{t.sections.educationLabel}</h3>
            </div>
            <div className="space-y-6">
              {t.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <p className="font-medium text-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.school} · {edu.period}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award size={20} className="text-primary" />
              <h3 className="font-semibold text-foreground">{t.sections.certificationsLabel}</h3>
            </div>
            <div className="space-y-4">
              {t.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
