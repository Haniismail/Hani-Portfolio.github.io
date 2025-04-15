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
                    4 years of hands-on web development
                  </h2>
                  <div className="description">
                    <p className="lt-sp01">
                      Experienced in various roles including backend
                      development, frontend development, database management,
                      and team leadership positions.
                    </p>
                    <p className="lt-sp01">
                      Certified in Amazon AWS Developer and Practitioner
                      alongside C1 levels in : IELTS, EF SET and DELF
                    </p>
                    <div className="about-buttons mt-4">
                      <a
                        href="#"
                        className="btn-about"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('/resume.pdf', '_blank');
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
