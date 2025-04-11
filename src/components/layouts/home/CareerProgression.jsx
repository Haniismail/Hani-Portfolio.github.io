import React, { Component } from 'react';

class CareerProgression extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careerSteps: [
        {
          id: 1,
          role: 'Backend Developer',
          company: 'Softylines',
          period: '2021 - 2022',
          description:
            'Developed and maintained backend services using Node.js and Express. Implemented RESTful APIs and database integrations for various client projects.',
          skills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'Git'],
          icon: 'fa-code',
        },
        {
          id: 2,
          role: 'Backend Tech Lead',
          company: 'Softylines',
          period: '2023 - 2024',
          description:
            'Led a team of backend developers, providing technical guidance and mentorship. Architected scalable solutions and implemented best practices for code quality and performance.',
          skills: [
            'Team Leadership',
            'System Architecture',
            'Code Reviews',
            'CI/CD',
            'AWS',
          ],
          icon: 'fa-users',
        },
        {
          id: 3,
          role: 'Full Stack Developer',
          company: 'Softylines',
          period: '2025',
          description:
            'Expanded role to include frontend development, creating end-to-end solutions. Worked on multiple projects simultaneously, delivering high-quality applications on tight deadlines.',
          skills: [
            'React',
            'Node.js',
            'Full Stack Development',
            'Project Management',
            'UI/UX',
          ],
          icon: 'fa-laptop',
        },
      ],
    };
  }

  render() {
    const { careerSteps } = this.state;

    return (
      <div className="tf-modal-content">
        <section
          className="career-progression-section position-relative"
          id="career"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 animate-element wow delay5 fadeInDown">
                <div className="flat-title t2 text-center">
                  <h4 className="sub-title mg-b22">Professional Development</h4>
                  <h2 className="title-section color-d12 mg-b41">
                    My Career Evolution
                  </h2>
                  <p className="career-intro">
                    Full stack web developer at Softylines - Architected, Built
                    and Maintained several projects with various clients in
                    optimal timing. Upon promotion, I led a team of developers
                    for teamwork and advisory purposes.
                  </p>
                </div>
              </div>
            </div>

            <div className="career-timeline">
              {careerSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`career-step ${
                    index % 2 === 0 ? 'left' : 'right'
                  }`}
                >
                  <div className="career-icon">
                    <i className={`fa ${step.icon}`}></i>
                  </div>
                  <div className="career-content">
                    <div className="career-header">
                      <h3 className="career-role">{step.role}</h3>
                      <div className="career-company-period">
                        <span className="career-company">{step.company}</span>
                        <span className="career-period">{step.period}</span>
                      </div>
                    </div>
                    <p className="career-description">{step.description}</p>
                    <div className="career-skills">
                      {step.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="career-skill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="timeline-line"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CareerProgression;
