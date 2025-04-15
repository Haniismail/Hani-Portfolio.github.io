import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiTool, FiLayout, FiGlobe } from 'react-icons/fi';
import { Section, SectionTitle, Card, Badge } from '../ui';

// Skill categories with their respective skills
const skillCategories = [
  {
    id: 1,
    title: 'Frontend Development',
    icon: <FiLayout size={24} />,
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Vue.js', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 85 },
      { name: 'SASS/SCSS', level: 80 },
      { name: 'Redux', level: 75 },
    ],
  },
  {
    id: 2,
    title: 'Backend Development',
    icon: <FiServer size={24} />,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 70 },
      { name: 'PHP', level: 75 },
      { name: 'Laravel', level: 70 },
    ],
  },
  {
    id: 3,
    title: 'Database',
    icon: <FiDatabase size={24} />,
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Firebase', level: 80 },
    ],
  },
  {
    id: 4,
    title: 'DevOps & Tools',
    icon: <FiTool size={24} />,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Netlify', level: 85 },
      { name: 'Vercel', level: 85 },
    ],
  },
  {
    id: 5,
    title: 'Programming Languages',
    icon: <FiCode size={24} />,
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'PHP', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'Java', level: 65 },
    ],
  },
  {
    id: 6,
    title: 'Other Skills',
    icon: <FiGlobe size={24} />,
    skills: [
      { name: 'Responsive Design', level: 90 },
      { name: 'UI/UX Principles', level: 80 },
      { name: 'SEO Basics', level: 75 },
      { name: 'Performance Optimization', level: 85 },
      { name: 'Agile/Scrum', level: 80 },
      { name: 'Technical Writing', level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <>
      {/* Hero Section */}
      <Section id="skills-hero" paddingY="large">
        <SectionTitle
          subtitle="My Expertise"
          title="Skills & Technologies"
          description="A comprehensive overview of my technical skills and proficiency levels."
          centered
        />
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </Section>
      
      {/* Tools & Technologies */}
      <Section id="tools" bgColor="light">
        <SectionTitle
          subtitle="Tools & Technologies"
          title="What I Use"
          description="The tools and technologies I use in my development workflow."
          centered
        />
        
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {['VS Code', 'Git', 'GitHub', 'Docker', 'Figma', 'Adobe XD', 'Postman', 'Chrome DevTools', 'npm', 'Webpack', 'Babel', 'ESLint', 'Prettier', 'Jest', 'React Testing Library', 'Cypress'].map((tool) => (
            <Badge key={tool} variant="primary" size="lg" className="mb-2">
              {tool}
            </Badge>
          ))}
        </div>
      </Section>
      
      {/* Learning & Growth */}
      <Section id="learning">
        <SectionTitle
          subtitle="Continuous Learning"
          title="What I'm Learning"
          description="I believe in continuous learning and staying up-to-date with the latest technologies."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-3">Next.js</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Exploring advanced features of Next.js for building server-rendered React applications.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-3">TypeScript</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Deepening my knowledge of TypeScript for building more robust and type-safe applications.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-3">Cloud Services</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Expanding my knowledge of cloud services like AWS and Google Cloud for scalable applications.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

// Skill Card Component
const SkillCard = ({ category }) => {
  return (
    <Card className="h-full">
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold">{category.title}</h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-indigo-600 to-pink-600 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Skills;
