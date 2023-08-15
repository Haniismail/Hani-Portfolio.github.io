import React, { Component } from "react";
import { Link } from "react-router-dom";
import links from "../links";
import menus from "../menus";
import bloglinks from "../bloglinks";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header id="header" className="header header-style1">
        <div className="container">
          <div className="flex-header d-flex justify-content-between align-items-center">
            <div className="socials-list-hd s1 hv1">
              <Link to="#">
                <i className="fa fa-facebook" aria-hidden="true" />
              </Link>
              <Link to="#">
                <i className="fa fa-twitter" aria-hidden="true" />
              </Link>
              <Link to="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </Link>
            </div>
            <div className="content-menu d-lg-flex">
              <div className="nav-wrap">
                <nav id="mainnav" className="mainnav">
                  <ul
                    className="menu ace-responsive-menu"
                    data-menu-style="horizontal"
                  >
                    <li>
                      <Link  to="/">Home</Link>
                      <ul className="sub-menu">
                        {links.map((data) => (
                          <li key={data.id}>
                            <Link
                              to={data.tolink}
                              onClick={() => {
                                window.location.href = data.tolink;
                              }}
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
                    <li>
                      <Link to="#" className="active">
                        Blog
                      </Link>
                      <ul className="sub-menu">
                        {bloglinks.map((data) => (
                          <li key={data.id}>
                            <Link
                              to={data.toblog}
                              onClick={() => {
                                window.location.href = data.toblog;
                              }}
                            >
                              {data.nameblog}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hire-me-s1 btn-general btn-hv-common d-lg-flex align-items-center">
                <Link
                  to="#"
                  className="btn-inner border-corner2 lt-sp08 text-white"
                >
                  Hire Me
                </Link>
              </div>
            </div>
            <div dir="rtl" className="btn-menu mobile-header__menu-button">
              <div className="line line-1" />
              <div className="line line-2" />
              <div className="line line-3" />
              <div className="line line-4" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
