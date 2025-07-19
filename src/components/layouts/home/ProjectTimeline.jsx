import React, { Component } from 'react';

class ProjectTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 0,
          title: 'MyGreenWork',
          date: 'Freelance Project',
          description:
            'A platform for canadian companies to organize and monitor their machines and recycle their debris',
          technologies: [
            'React',
            'Node.js',
            'AWS',
            'Express',
            'MongoDB',
            'Replit',
          ],
          link: 'https://mygreenwork.com/',
          image: 'images/section/mygreenwork.png',
          position: 'right',
        },
        {
          id: 1,
          title: 'Linkefoot',
          date: 'October 2023 - July 2025',
          description:
            'A social platform for football enthusiasts to connect, organize matches, and share their passion for the sport. Worked as a Tech Lead on this project.',
          technologies: [
            'React',
            'Node.js',
            'AWS',
            'Express',
            'MongoDB',
            'Socket.IO',
          ],
          link: 'https://linkefoot.com/',
          image: 'images/section/linkefoot.jpeg',
          position: 'left',
        },
        {
          id: 2,
          title: 'Proximabel',
          date: 'May 2023 - October 2023',
          description:
            'A web platform connecting users with local service providers, featuring real-time booking and service management. Served as Tech Lead for this project.',
          technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
          link: 'https://proximabel.com',
          image: 'images/section/proximabel.png',
          position: 'right',
        },
        {
          id: 3,
          title: 'Taki Kids Backend',
          date: 'Jan 2022 - Aug 2022',
          description:
            'Backend development for an educational mobile app for children, featuring interactive learning activities and games.',
          technologies: ['Node.js', 'Express', 'MongoDB', 'AWS', 'Socket.IO'],
          link: 'https://play.google.com/store/apps/details?id=com.takiacademy.takiacademykids&pcampaignid=web_share',
          image: 'images/section/takikids.jpeg',
          position: 'left',
        },
        {
          id: 4,
          title: 'Viral Ventures Media',
          date: 'Side Project',
          description:
            'A digital marketing agency website showcasing services, portfolio, and client testimonials with modern design.',
          technologies: ['React', 'Next.js', 'CSS3', 'Bootstrap', 'JavaScript'],
          link: 'https://viralventuresmedia.vercel.app/',
          image: 'images/section/vvm.jpeg',
          position: 'right',
        },
        {
          id: 5,
          title: 'Student Help',
          date: 'Aug 2022 - Dec 2022',
          description:
            'A mobile application designed to help students with academic resources, study materials, and collaboration tools.',
          technologies: [
            'React Native',
            'Node.js',
            'Express',
            'MongoDB',
            'Firebase',
          ],
          link: 'https://play.google.com/store/apps/details?id=com.softylines.studenthelp&pcampaignid=web_share',
          image: 'images/section/studenthelp.jpg',
          position: 'left',
        },
      ],
    };
  }

  render() {
    const { projects } = this.state;

    return (
      <div className="tf-modal-content">
        <section
          className="project-timeline-section position-relative"
          id="projects"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 animate-element wow delay5 fadeInDown">
                <div className="flat-title t2 text-center">
                  <h4 className="sub-title mg-b22">My Projects</h4>
                  <h2 className="title-section color-d12 mg-b41">
                    Recent Work
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="timeline">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className={`timeline-item ${
                        project.position === 'right'
                          ? 'timeline-right'
                          : 'timeline-left'
                      }`}
                    >
                      <div className="timeline-content">
                        <div className="timeline-date">{project.date}</div>
                        <div className="timeline-image-container">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="timeline-image"
                          />
                        </div>
                        <h3 className="timeline-title">{project.title}</h3>
                        <p className="timeline-description">
                          {project.description}
                        </p>
                        <div className="timeline-tech">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="timeline-link"
                        >
                          View Project <i className="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectTimeline;
