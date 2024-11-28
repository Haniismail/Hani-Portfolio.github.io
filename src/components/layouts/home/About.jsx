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
                    3 years of hands-on web development
                  </h2>
                  <div className="description">
                    <p className="lt-sp01">
                      Variant roles such as backend development, front end
                      development, database management and team lead roles.
                    </p>
                    <p className="lt-sp01">
                      Certified in Amazon AWS Developer and Practitioner
                      alongside C1 levels in : IELTS, EF SET and DELF
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="fact">
                  <div className="btn-contact bg-s1 text-center">
                    <h5 className="title color-d12">Hit me up !</h5>
                    <a
                      className="email color-s1 color-d14"
                      href="mailto:Emailofhaniismail@gmail.com"
                    >
                      Emailofhaniismail@gmail.com
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

export default About;
