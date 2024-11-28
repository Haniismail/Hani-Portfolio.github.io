import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import links from '../links';
import menus from '../menus';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header id="header" className="header header-style3 has-menu-model">
        <div className="container">
          <div className="flex-header d-flex justify-content-between align-items-center">
            <div dir="rtl" className="btn-menu mobile-header__menu-button">
              <div className="line line-1" />
              <div className="line line-2" />
              <div className="line line-3" />
              <div className="line line-4" />
            </div>
            <div className="content-menu d-lg-flex">
              <div className="nav-wrap">
                <nav id="mainnav" className="mainnav">
                  <ul
                    className="menu ace-responsive-menu"
                    data-menu-style="horizontal"
                  >
                    <li>
                      <Link to="/" className="active">
                        Home
                      </Link>
                      <ul className="sub-menu">
                        {links.map((data) => (
                          <li key={data.id}>
                            <Link
                              to={data.tolink}
                              onClick={() => {
                                window.location.href = data.tolink;
                              }}
                              className={data.id === 3 ? 'active' : ''}
                            >
                              {data.namelink}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    {menus.map((menu) => (
                      <li key={menu.id}>
                        <Link to={menu.tomenu} className="click-model">
                          {menu.namemenu}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="socials-list-hd s2 hv2">
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
      </header>
    );
  }
}

export default Header;
