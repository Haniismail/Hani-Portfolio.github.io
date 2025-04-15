import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMessageSquare } from 'react-icons/fi';
import { Section, SectionTitle, Card } from './index';

const Testimonials = () => {
  // LinkedIn profile URL
  const linkedInUrl = 'https://linkedin.com/in/hanismail';

  // Testimonial data
  const testimonial = {
    id: 1,
    name: 'Med Raed Besbes',
    position: 'Senior Software Engineer',
    text: 'Hani is a dedicated software developer with a solid understanding of project requirements. During my time working with him as a tech lead, I observed his ability to follow instructions meticulously and effectively implement feedback. He consistently applied suggested improvements and demonstrated a strong commitment to learning. Hani is proactive, adaptable, and has shown great potential in his ability to grow and take on new challenges.',
    linkedIn: linkedInUrl,
  };

  return (
    <Section id="testimonials" bgColor="light">
      <SectionTitle
        subtitle="Testimonials"
        title="What People Say"
        description="Feedback from professionals I've worked with."
        centered
      />

      <div className="max-w-4xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="relative p-8 md:p-10">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-indigo-200 dark:text-indigo-900 opacity-50">
              <FiMessageSquare size={60} />
            </div>

            {/* Testimonial content */}
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 italic mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                {/* LinkedIn link */}
                <a
                  href={testimonial.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors duration-300"
                  aria-label="View on LinkedIn"
                  title="Connect on LinkedIn"
                >
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default Testimonials;
