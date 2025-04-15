import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import { Section, SectionTitle, Card, Badge, Button } from '../ui';

// Sample project data (you would replace this with your actual projects)
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment integration.',
    image: '/images/projects/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Full Stack',
    liveUrl: 'https://project1.com',
    githubUrl: 'https://github.com/haniismail/project1',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design.',
    image: '/images/projects/project2.jpg',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
    liveUrl: 'https://project2.com',
    githubUrl: 'https://github.com/haniismail/project2',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A task management application with user authentication, task creation, and progress tracking.',
    image: '/images/projects/project3.jpg',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    category: 'Frontend',
    liveUrl: 'https://project3.com',
    githubUrl: 'https://github.com/haniismail/project3',
  },
  {
    id: 4,
    title: 'API Service',
    description: 'A RESTful API service built with Node.js and Express, featuring authentication, data validation, and comprehensive documentation.',
    image: '/images/projects/project4.jpg',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Backend',
    liveUrl: 'https://project4.com',
    githubUrl: 'https://github.com/haniismail/project4',
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations.',
    image: '/images/projects/project5.jpg',
    tags: ['React', 'API Integration', 'CSS'],
    category: 'Frontend',
    liveUrl: 'https://project5.com',
    githubUrl: 'https://github.com/haniismail/project5',
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'A blog platform with content management, user authentication, and commenting functionality.',
    image: '/images/projects/project6.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Full Stack',
    liveUrl: 'https://project6.com',
    githubUrl: 'https://github.com/haniismail/project6',
  },
];

const Projects = () => {
  // State for filtering projects
  const [filter, setFilter] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  return (
    <>
      {/* Hero Section */}
      <Section id="projects-hero" paddingY="large">
        <SectionTitle
          subtitle="My Work"
          title="Projects & Case Studies"
          description="Explore my portfolio of web development projects, showcasing my skills and expertise."
          centered
        />
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section id="cta" bgColor="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's collaborate to bring your ideas to life with modern web technologies.
          </p>
          <Button to="/contact" size="lg" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden rounded-t-xl -mx-6 -mt-6">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Project Content */}
      <div className="flex-grow p-6 pt-4">
        <h3 className="text-xl font-bold mt-4 mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="primary" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      {/* Project Links */}
      <div className="flex justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button 
          href={project.liveUrl} 
          variant="ghost" 
          size="sm" 
          icon={<FiExternalLink />}
        >
          Live Demo
        </Button>
        <Button 
          href={project.githubUrl} 
          variant="ghost" 
          size="sm" 
          icon={<FiGithub />}
        >
          Code
        </Button>
      </div>
    </Card>
  );
};

export default Projects;
