import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import links from '../links';
import menus from '../menus';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSticky: false,
      mobileMenuOpen: false,
    };
    this.headerRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ isSticky: true });
    } else {
      this.setState({ isSticky: false });
    }
  };

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }));
  };

  render() {
    const { isSticky, mobileMenuOpen } = this.state;

    return (
      <header
        id="header"
        className={`header elegant-header ${isSticky ? 'sticky' : ''}`}
        ref={this.headerRef}
      >
        <div className="header-overlay"></div>
        <div className="container">
          <div className="header-inner d-flex justify-content-between align-items-center">
            <div className="logo-wrapper">
              <Link to="/" className="logo">
                <span className="logo-text">
                  Hani<span className="highlight">.</span>
                </span>
              </Link>
            </div>

            <div
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={this.toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div
              className={`navigation-wrapper ${mobileMenuOpen ? 'open' : ''}`}
            >
              <nav className="main-navigation">
                <ul className="menu-list">
                  {menus.map((menu) => (
                    <li key={menu.id} className="menu-item">
                      <a
                        href={menu.tomenu}
                        className="menu-link"
                        onClick={(e) => {
                          e.preventDefault();
                          const targetSection = document.querySelector(
                            menu.tomenu
                          );
                          if (targetSection) {
                            window.scrollTo({
                              top: targetSection.offsetTop - 100,
                              behavior: 'smooth',
                            });
                            this.setState({ mobileMenuOpen: false });
                          }
                        }}
                      >
                        {menu.namemenu}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="header-actions">
                <a
                  href="#"
                  className="download-cv-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    const resumeLink = document.createElement('a');
                    resumeLink.href = '/resume.pdf';
                    resumeLink.download = 'Hani_Ismail_Resume.pdf';
                    document.body.appendChild(resumeLink);
                    resumeLink.click();
                    document.body.removeChild(resumeLink);
                  }}
                >
                  <i className="fa fa-download"></i>
                  <span>Resume</span>
                </a>

                <div className="social-icons">
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
                    href="mailto:emailofhaniismail@gmail.com"
                    className="social-icon email"
                    aria-label="Email"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
