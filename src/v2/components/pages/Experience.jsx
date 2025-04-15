import React from 'react';
import { FiBriefcase, FiBook, FiAward } from 'react-icons/fi';
import { Section, SectionTitle, Timeline, Card, Badge } from '../ui';

const Experience = () => {
  // Work experience data
  const workExperience = [
    {
      id: 1,
      title: 'Senior Web Developer',
      company: 'Tech Company',
      location: 'Tunisia',
      period: '2022 - Present',
      description: 'Leading the front-end development team, implementing modern web technologies, and mentoring junior developers.',
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
      description: 'Developed responsive websites and web applications for various clients using React, Node.js, and other modern technologies.',
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
      description: 'Started my professional career working on web development projects and gaining experience with various technologies.',
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

  // Education data
  const education = [
    {
      id: 1,
      degree: 'Bachelor\'s Degree in Software Engineering',
      institution: 'University of Tunisia',
      location: 'Tunisia',
      period: '2014 - 2018',
      description: 'Studied software engineering with a focus on web development and database management.',
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
      description: 'Gained foundational knowledge in computer science and programming.',
      courses: [
        'Introduction to Programming',
        'Computer Architecture',
        'Basic Web Development',
        'Mathematics for Computer Science',
      ],
    },
  ];

  // Certifications data
  const certifications = [
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

  return (
    <>
      {/* Hero Section */}
      <Section id="experience-hero" paddingY="large">
        <SectionTitle
          subtitle="My Journey"
          title="Professional Experience"
          description="A detailed overview of my professional experience, education, and certifications."
          centered
        />
      </Section>
      
      {/* Work Experience Section */}
      <Section id="work-experience" bgColor="light">
        <SectionTitle
          subtitle="Work History"
          title="Professional Experience"
          description="My professional journey and the companies I've worked with."
        />
        
        <div className="mt-12 space-y-12">
          {workExperience.map((job) => (
            <ExperienceCard key={job.id} job={job} />
          ))}
        </div>
      </Section>
      
      {/* Education Section */}
      <Section id="education">
        <SectionTitle
          subtitle="Education"
          title="Academic Background"
          description="My educational journey and qualifications."
        />
        
        <div className="mt-12">
          <Timeline>
            {education.map((edu, index) => (
              <Timeline.Item
                key={edu.id}
                date={edu.period}
                title={edu.degree}
                subtitle={`${edu.institution}, ${edu.location}`}
                description={edu.description}
                icon={<FiBook />}
                position={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </Timeline>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <Card key={edu.id} className="h-full">
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                {edu.institution}, {edu.period}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{edu.description}</p>
              
              <h4 className="font-semibold mb-2">Key Courses:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                {edu.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Certifications Section */}
      <Section id="certifications" bgColor="light">
        <SectionTitle
          subtitle="Certifications"
          title="Professional Certifications"
          description="Certifications and courses I've completed to enhance my skills."
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="h-full">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-3">
                  <FiAward size={20} />
                </div>
                <h3 className="font-bold">{cert.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Issued by {cert.issuer}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Date: {cert.date}</p>
              <a 
                href={cert.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
              >
                View Credential
              </a>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

// Experience Card Component
const ExperienceCard = ({ job }) => {
  return (
    <Card className="relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>
      
      <div className="pl-6">
        <div className="flex flex-wrap justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold">{job.title}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {job.company}, {job.location}
            </p>
          </div>
          <Badge variant="primary" size="lg">{job.period}</Badge>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">{job.description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {job.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Experience;
