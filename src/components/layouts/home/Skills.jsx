import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="tf-modal-content">
        <section className="skills-section position-relative" id="skills">
          <div className="container">
            <div className="row">
              <div className="col-md-12 animate-element wow delay5 fadeInDown">
                <div className="flat-title t2 text-center">
                  <h4 className="sub-title mg-b22">My Skills</h4>
                  <h2 className="title-section color-d12 mg-b41">
                    Technical Expertise
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 mb-4">
                <div className="expertise-card">
                  <div className="expertise-header">
                    <div className="expertise-icon">
                      <i className="fa fa-code"></i>
                    </div>
                    <h4>Frontend</h4>
                  </div>
                  <div className="expertise-content">
                    <div className="tech-tag">React</div>
                    <div className="tech-tag">Next.js</div>
                    <div className="tech-tag">JavaScript</div>
                    <div className="tech-tag">TypeScript</div>
                    <div className="tech-tag">HTML5/CSS3</div>
                    <div className="tech-tag">Bootstrap</div>
                    <div className="tech-tag">Tailwind CSS</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="expertise-card">
                  <div className="expertise-header">
                    <div className="expertise-icon">
                      <i className="fa fa-server"></i>
                    </div>
                    <h4>Backend</h4>
                  </div>
                  <div className="expertise-content">
                    <div className="tech-tag">Node.js</div>
                    <div className="tech-tag">Express</div>
                    <div className="tech-tag">NestJS</div>
                    <div className="tech-tag">RESTful APIs</div>
                    <div className="tech-tag">GraphQL</div>
                    <div className="tech-tag">Socket.IO</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="expertise-card">
                  <div className="expertise-header">
                    <div className="expertise-icon">
                      <i className="fa fa-database"></i>
                    </div>
                    <h4>Databases</h4>
                  </div>
                  <div className="expertise-content">
                    <div className="tech-tag">MongoDB</div>
                    <div className="tech-tag">MySQL</div>
                    <div className="tech-tag">MariaDB</div>
                    <div className="tech-tag">Sequelize</div>
                    <div className="tech-tag">Mongoose</div>
                    <div className="tech-tag">Redis</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="expertise-card">
                  <div className="expertise-header">
                    <div className="expertise-icon">
                      <i className="fa fa-cloud"></i>
                    </div>
                    <h4>DevOps & Cloud</h4>
                  </div>
                  <div className="expertise-content">
                    <div className="tech-tag">AWS</div>
                    <div className="tech-tag">CI/CD</div>
                    <div className="tech-tag">Docker</div>
                    <div className="tech-tag">Kubernetes</div>
                    <div className="tech-tag">Git</div>
                    <div className="tech-tag">GitHub Actions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Skills;
