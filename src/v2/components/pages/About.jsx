import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';
import { Section, SectionTitle, Button, Timeline } from '../ui';
import { FiBriefcase, FiBook } from 'react-icons/fi';
import AboutImage from '../../data/images/about-image.jpg'; // You'll need to add this image

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <Section id="about-hero" paddingY="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
              subtitle="About Me"
              title="Get to know me better"
              description="Learn about my journey, experience, and what drives me as a web developer."
            />

            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a passionate web developer based in Tunisia with a strong
                focus on creating modern, responsive, and user-friendly web
                applications. With a background in software engineering, I bring
                a structured and methodical approach to my work.
              </p>
              <p>
                My journey in web development started during my university
                years, and I've been continuously learning and improving my
                skills ever since. I'm particularly interested in front-end
                development and creating intuitive user interfaces.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying outdoor
                activities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="/documents/cv.pdf" icon={<FiDownload />}>
                Download CV
              </Button>
              <Button to="/contact" variant="outline" icon={<FiMail />}>
                Contact Me
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
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>

              {/* Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src={AboutImage}
                  alt="Hani ISMAIL"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" bgColor="light">
        <SectionTitle
          subtitle="My Journey"
          title="Professional Experience"
          description="A timeline of my professional career and key milestones."
          centered
        />

        <div className="mt-12">
          <Timeline>
            <Timeline.Item
              date="2022 - Present"
              title="Senior Web Developer"
              subtitle="Tech Company, Tunisia"
              description="Leading the front-end development team, implementing modern web technologies, and mentoring junior developers."
              icon={<FiBriefcase />}
              position="left"
            />
            <Timeline.Item
              date="2020 - 2022"
              title="Web Developer"
              subtitle="Digital Agency, Tunisia"
              description="Developed responsive websites and web applications for various clients using React, Node.js, and other modern technologies."
              icon={<FiBriefcase />}
              position="right"
            />
            <Timeline.Item
              date="2018 - 2020"
              title="Junior Developer"
              subtitle="Startup, Tunisia"
              description="Started my professional career working on web development projects and gaining experience with various technologies."
              icon={<FiBriefcase />}
              position="left"
            />
          </Timeline>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <SectionTitle
          subtitle="My Education"
          title="Academic Background"
          description="My educational journey and qualifications."
          centered
        />

        <div className="mt-12">
          <Timeline>
            <Timeline.Item
              date="2014 - 2018"
              title="Bachelor's Degree in Software Engineering"
              subtitle="University of Tunisia"
              description="Studied software engineering with a focus on web development and database management."
              icon={<FiBook />}
              position="right"
            />
            <Timeline.Item
              date="2012 - 2014"
              title="Associate Degree in Computer Science"
              subtitle="Technical Institute, Tunisia"
              description="Gained foundational knowledge in computer science and programming."
              icon={<FiBook />}
              position="left"
            />
          </Timeline>
        </div>
      </Section>

      {/* Personal Interests Section */}
      <Section id="interests" bgColor="light">
        <SectionTitle
          subtitle="Beyond Coding"
          title="Personal Interests"
          description="When I'm not coding, here's what I enjoy doing."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm passionate about staying up-to-date with the latest
              technologies and continuously improving my skills.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-3">Open Source</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I enjoy contributing to open-source projects and giving back to
              the developer community.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-3">Outdoor Activities</h3>
            <p className="text-gray-600 dark:text-gray-400">
              When away from the computer, I enjoy hiking, photography, and
              exploring new places.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default About;
