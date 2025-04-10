import React, { Component } from 'react';

class CallToAction extends Component {
  render() {
    return (
      <div className="tf-modal-content">
        <section className="call-to-action-section position-relative" id="contact">
          <div className="container">
            <div className="cta-box">
              <div className="row align-items-center">
                <div className="col-md-8 animate-element wow delay5 fadeInDown">
                  <div className="cta-content">
                    <h2 className="cta-title">Let's Work Together</h2>
                    <p className="cta-description">
                      I'm currently available for freelance work or full-time positions. 
                      If you're interested in working together, have a project in mind, 
                      or just want to say hello, I'd love to hear from you!
                    </p>
                  </div>
                </div>
                <div className="col-md-4 animate-element wow delay5 fadeInUp text-md-end text-center mt-md-0 mt-4">
                  <div className="cta-buttons">
                    <a href="mailto:emailofhaniismail@gmail.com" className="btn-cta email-btn">
                      <i className="fa fa-envelope"></i> Email Me
                    </a>
                    <a href="https://www.linkedin.com/in/hanismail/" target="_blank" rel="noreferrer" className="btn-cta linkedin-btn">
                      <i className="fa fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="#" className="btn-cta resume-btn" onClick={(e) => {
                      e.preventDefault();
                      window.open('/resume.pdf', '_blank');
                    }}>
                      <i className="fa fa-file-pdf-o"></i> Download CV
                    </a>
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

export default CallToAction;
