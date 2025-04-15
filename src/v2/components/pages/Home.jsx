import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { Section, Button, SectionTitle, Testimonials } from '../ui';
import { heroImage } from '../../data/images/placeholder';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Section
        id="hero"
        className="min-h-screen flex items-center"
        paddingY="none"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="block">Hello, I'm</span>
              <span className="text-gradient">Hani ISMAIL</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Web Developer specializing in creating modern, responsive web
              applications with a focus on user experience and performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact" size="lg" icon={<FiArrowRight />}>
                Get in Touch
              </Button>
              <Button
                href="/documents/cv.pdf"
                variant="outline"
                size="lg"
                icon={<FiDownload />}
              >
                Download CV
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>

              {/* Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src={heroImage}
                  alt="Hani ISMAIL"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Featured Projects Section Preview */}
      <Section id="featured-projects" bgColor="light">
        <SectionTitle
          subtitle="My Work"
          title="Featured Projects"
          description="Here are some of my recent projects that showcase my skills and expertise."
          centered
        />

        <div className="text-center mt-8">
          <Button to="/projects" variant="primary">
            View All Projects
          </Button>
        </div>
      </Section>

      {/* Skills Preview Section */}
      <Section id="skills-preview">
        <SectionTitle
          subtitle="My Expertise"
          title="Skills & Technologies"
          description="I specialize in a range of technologies for building modern web applications."
          centered
        />

        <div className="text-center mt-8">
          <Button to="/skills" variant="primary">
            View All Skills
          </Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action */}
      <Section id="cta" bgColor="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to work together?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            I'm currently available for freelance work and open to new
            opportunities.
          </p>
          <Button to="/contact" size="lg" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Home;
