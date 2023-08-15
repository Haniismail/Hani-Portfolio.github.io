import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                    Hi, I am here to help your next project!
                  </h2>
                  <div className="description">
                    <p className="lt-sp01">
                      Hi, if you need a front-end, backend or even a fullstack
                      project I'm here to help i can do that in many JS
                      frameworks
                    </p>
                    <p className="lt-sp01">
                      With more than 5 online projects, ranging from mobile,
                      front to backend i have the necessary skills stack and
                      experience to deliver your project in exceptional timing
                    </p>
                  </div>
                </div>
              </div>
              <div className="fact">
                <div className="btn-contact bg-s1 text-center">
                  <h4 className="title color-d12">
                    Get a project? Let’s talk.
                  </h4>

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
        </section>
      </div>
    );
  }
}

export default About;
