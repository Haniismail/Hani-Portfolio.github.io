import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="tf-modal-content">
        <section
          className="about-me t2 s3 shape-am position-relative"
          id="about"
        >
          <div className="container">
            <div className="row position-relative">
              <div
                className="col-lg-7 animate-element wow delay5 fadeInDown"
                data-wow-delay="0.5s"
              >
                <div className="flat-title t2">
                  <h4 className="sub-title mg-b22">About Me</h4>
                  <h2 className="title-section color-d12 mg-b41">
                    5 years of hands-on web development
                  </h2>
                  <div className="description">
                    <p className="lt-sp01">
                      Specialized in backend development with expertise in
                      designing and implementing scalable architectures. Strong
                      focus on AWS cloud solutions and full-stack development
                      with a backend emphasis.
                    </p>
                    <p className="lt-sp01">
                      AWS Solutions Architect Associate certified with extensive
                      experience in cloud architecture and backend system design
                    </p>
                    <div className="about-buttons mt-4">
                      <a
                        href="#"
                        className="btn-about"
                        onClick={(e) => {
                          e.preventDefault();
                          // Try to fetch the resume file to check if it exists
                          fetch('/resume.pdf')
                            .then((response) => {
                              if (response.ok) {
                                window.open('/resume.pdf', '_blank');
                              } else {
                                alert(
                                  'Resume file not available. Please upload your resume.pdf file to the public directory.'
                                );
                              }
                            })
                            .catch(() => {
                              alert(
                                'Resume file not available. Please upload your resume.pdf file to the public directory.'
                              );
                            });
                        }}
                      >
                        <i className="fa fa-download mr-2"></i> Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="fact">
                  <div className="btn-contact bg-s1 text-center">
                    <h5 className="title color-d12">Contact Me</h5>
                    <a
                      className="email color-s1 color-d14"
                      href="mailto:emailofhaniismail@gmail.com"
                    >
                      emailofhaniismail@gmail.com
                    </a>
                    <div
                      className="contact-social-icons"
                      style={{ marginTop: '15px' }}
                    >
                      <a
                        href="https://www.linkedin.com/in/hanismail/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon"
                      >
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                      <a
                        href="https://github.com/Haniismail/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon"
                      >
                        <i className="fa fa-github" aria-hidden="true" />
                      </a>
                    </div>
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

export default About;
