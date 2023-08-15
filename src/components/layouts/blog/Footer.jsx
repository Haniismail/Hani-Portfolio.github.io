import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer footer-s1">
                <div id="footer-widget" className="footer-widget-s4 footer-widget-line bg-s1 position-relative">
                    <div className="container">
                        <div className="widget-text text-center">
                        <h3 className="widget-title small lt-sp06 mg-b63 text-white">Stay Connected</h3>
                        <p className="address mg-b2 text-white">Sydney, Austrlia</p>
                        <p className="email mg-b5 text-white">hello@dolio.com</p>
                        <p className="phone mg-b53 text-white">+91 254 787 878</p>
                        <div className="site-list site-list-center">
                            <Link to="#" className="bg-s1"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s2"><i className="fa fa-behance" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s3"><span className="icon-dribble" /></Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div id="bottom" className="bottom-s4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="copyright lt-sp02">
                                © Roy Design, 2020 All rights reserved.
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <ul className="widget-nav-menu color-s1">
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">Portfolio</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-12">
                                <div className="socials-list color-s1">
                                    <Link to="#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                                    <Link to="#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                                    <Link to="#"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
