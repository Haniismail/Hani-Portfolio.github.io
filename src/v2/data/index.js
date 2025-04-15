// This file exports all data for the portfolio

// Personal Information
export const personalInfo = {
  name: 'Hani ISMAIL',
  title: 'Web Developer',
  email: 'contact@haniismail.com',
  phone: '+216 XX XXX XXX',
  location: 'Tunisia',
  bio: 'Web Developer based in Tunisia, specializing in creating modern, responsive web applications with a focus on user experience and performance.',
  socialLinks: {
    github: 'https://github.com/haniismail',
    linkedin: 'https://linkedin.com/in/hanismail',
    twitter: 'https://twitter.com/haniismail',
  },
};

// Projects
export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product management, cart functionality, and payment integration.',
    image: '/images/projects/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Full Stack',
    liveUrl: 'https://project1.com',
    githubUrl: 'https://github.com/haniismail/project1',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description:
      'A modern portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design.',
    image: '/images/projects/project2.jpg',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
    liveUrl: 'https://project2.com',
    githubUrl: 'https://github.com/haniismail/project2',
  },
  {
    id: 3,
    title: 'Task Management App',
    description:
      'A task management application with user authentication, task creation, and progress tracking.',
    image: '/images/projects/project3.jpg',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    category: 'Frontend',
    liveUrl: 'https://project3.com',
    githubUrl: 'https://github.com/haniismail/project3',
  },
  {
    id: 4,
    title: 'API Service',
    description:
      'A RESTful API service built with Node.js and Express, featuring authentication, data validation, and comprehensive documentation.',
    image: '/images/projects/project4.jpg',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Backend',
    liveUrl: 'https://project4.com',
    githubUrl: 'https://github.com/haniismail/project4',
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description:
      'A weather dashboard that displays current weather conditions and forecasts for multiple locations.',
    image: '/images/projects/project5.jpg',
    tags: ['React', 'API Integration', 'CSS'],
    category: 'Frontend',
    liveUrl: 'https://project5.com',
    githubUrl: 'https://github.com/haniismail/project5',
  },
  {
    id: 6,
    title: 'Blog Platform',
    description:
      'A blog platform with content management, user authentication, and commenting functionality.',
    image: '/images/projects/project6.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Full Stack',
    liveUrl: 'https://project6.com',
    githubUrl: 'https://github.com/haniismail/project6',
  },
];

// Skills
export const skillCategories = [
  {
    id: 1,
    title: 'Frontend Development',
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
];

// Experience
export const workExperience = [
  {
    id: 1,
    title: 'Senior Web Developer',
    company: 'Tech Company',
    location: 'Tunisia',
    period: '2022 - Present',
    description:
      'Leading the front-end development team, implementing modern web technologies, and mentoring junior developers.',
    responsibilities: [
      'Developed and maintained multiple React-based web applications',
      'Implemented responsive designs and ensured cross-browser compatibility',
      'Collaborated with UI/UX designers to implement visual elements',
      'Mentored junior developers and conducted code reviews',
      'Optimized applications for maximum speed and scalability',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    id: 2,
    title: 'Web Developer',
    company: 'Digital Agency',
    location: 'Tunisia',
    period: '2020 - 2022',
    description:
      'Developed responsive websites and web applications for various clients using React, Node.js, and other modern technologies.',
    responsibilities: [
      'Built responsive websites and web applications for clients',
      'Collaborated with the design team to implement UI/UX designs',
      'Integrated RESTful APIs and third-party services',
      'Performed testing and debugging across multiple browsers',
      'Participated in client meetings and requirement gathering',
    ],
    technologies: ['React', 'JavaScript', 'CSS/SASS', 'Node.js', 'Express'],
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'Startup',
    location: 'Tunisia',
    period: '2018 - 2020',
    description:
      'Started my professional career working on web development projects and gaining experience with various technologies.',
    responsibilities: [
      'Assisted in developing and maintaining web applications',
      'Implemented UI components based on design specifications',
      'Fixed bugs and improved application performance',
      'Learned and applied new technologies and frameworks',
      'Participated in team meetings and agile development processes',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP'],
  },
];

// Education
export const education = [
  {
    id: 1,
    degree: "Bachelor's Degree in Software Engineering",
    institution: 'University of Tunisia',
    location: 'Tunisia',
    period: '2014 - 2018',
    description:
      'Studied software engineering with a focus on web development and database management.',
    courses: [
      'Web Development',
      'Database Management',
      'Software Engineering',
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
    ],
  },
  {
    id: 2,
    degree: 'Associate Degree in Computer Science',
    institution: 'Technical Institute',
    location: 'Tunisia',
    period: '2012 - 2014',
    description:
      'Gained foundational knowledge in computer science and programming.',
    courses: [
      'Introduction to Programming',
      'Computer Architecture',
      'Basic Web Development',
      'Mathematics for Computer Science',
    ],
  },
];

// Certifications
export const certifications = [
  {
    id: 1,
    title: 'Advanced React and Redux',
    issuer: 'Udemy',
    date: '2022',
    credentialUrl: 'https://udemy.com/certificate/123',
  },
  {
    id: 2,
    title: 'Node.js Developer',
    issuer: 'Coursera',
    date: '2021',
    credentialUrl: 'https://coursera.org/certificate/456',
  },
  {
    id: 3,
    title: 'MongoDB for JavaScript Developers',
    issuer: 'MongoDB University',
    date: '2020',
    credentialUrl: 'https://university.mongodb.com/certificate/789',
  },
  {
    id: 4,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2019',
    credentialUrl: 'https://freecodecamp.org/certificate/abc',
  },
];
