import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menus from '../menus';

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <footer id="footer" className="elegant-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-info">
                <div className="footer-logo">
                  <span className="logo-text">
                    Hani<span className="highlight">.</span>
                  </span>
                </div>
                <p className="footer-description">
                  Full-stack developer with 4 years of experience in creating
                  responsive and scalable web applications. Specialized in
                  React, Node.js, and AWS cloud services.
                </p>
                <div className="footer-social-icons">
                  <a
                    href="https://www.linkedin.com/in/hanismail/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon linkedin"
                    aria-label="LinkedIn"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/Haniismail/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon github"
                    aria-label="GitHub"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                  <a
                    href="https://medium.com/@haniismail/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon medium"
                    aria-label="Medium"
                  >
                    <i className="fa fa-medium"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 footer-links">
                <h4 className="footer-heading">Navigation</h4>
                <ul className="footer-menu">
                  {menus.map((menu) => (
                    <li key={menu.id} className="footer-menu-item">
                      <Link to={menu.tomenu} className="footer-menu-link">
                        <i className="fa fa-chevron-right"></i> {menu.namemenu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-contact">
                <h4 className="footer-heading">Contact Me</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:emailofhaniismail@gmail.com">
                      emailofhaniismail@gmail.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <i className="fa fa-map-marker"></i>
                    <span>Tunisia</span>
                  </div>
                  <div className="contact-item">
                    <i className="fa fa-globe"></i>
                    <a
                      href="https://github.com/Haniismail"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/Haniismail
                    </a>
                  </div>
                </div>
                <div className="footer-cta">
                  <a
                    href="#"
                    className="footer-cta-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('/resume.pdf', '_blank');
                    }}
                  >
                    <i className="fa fa-download"></i> Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <p>
                &copy; {currentYear}{' '}
                <span className="highlight">Hani Ismail</span>. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
