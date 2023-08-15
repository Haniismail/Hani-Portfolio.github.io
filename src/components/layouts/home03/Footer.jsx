import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div className="tf-modal-content justify-content-end">
        <footer id="footer" className="footer footer-s2">
          <div className="container">
            <div
              id="footer-widget"
              className="footer-widget-s3 border-bottom-s1 position-relative"
            >
              <h3 className="widget-title larger color-d10 lt-sp06 text-center">
                Reach out to me !
              </h3>
              <div className="site-list site-list-center text-center">
                <a
                  href="https://www.linkedin.com/in/hanismail/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-s1"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/Haniismail/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-s2"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a
                  href="https://medium.com/@haniismail/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-s3"
                >
                  <span className="fa fa-medium" />
                </a>
                <a
                  href="mailto:Emailofhaniismail@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-s3"
                >
                  <span className="fa fa-envelope" />
                </a>
              </div>
            </div>
          </div>
          <div id="bottom" className="bottom-s3">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="copyright lt-sp02">
                    © Built proudly in 2023 (a lot of coffee included)
                  </div>
                </div>
                <div className="col-lg-6"></div>
                <div className="col-lg-2">
                  <div className="socials-list color-s2">
                    <a
                      href="https://www.linkedin.com/in/hanismail/"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-s1"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                    <a
                      href="https://github.com/Haniismail/"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-s2"
                    >
                      <i className="fa fa-github" aria-hidden="true" />
                    </a>
                    <a
                      href="https://medium.com/@haniismail/"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-s3"
                    >
                      <span className="fa fa-medium" />
                    </a>
                    <a
                      href="mailto:Emailofhaniismail@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-s3"
                    >
                      <span className="fa fa-envelope" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
