import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="widget widget-search">
                    <form action="#" className="form-search position-relative">
                        <input type="text" className="search" placeholder="What are you looking for?" />
                        <button className="btn-search"><i className="fa fa-search" aria-hidden="true" /></button>
                    </form>
                </div>
                <div className="widget widget-follow-me">
                    <h3 className="widget-title">Follow me</h3>
                    <div className="social-network">
                        <div className="d-flex justify-content-between">
                            <div className="iconbox-s3 color-s1">
                                <div className="iconbox-icon"><i className="fa fa-behance" aria-hidden="true" /></div>
                                <span className="likes lt-sp16 f-w500 color-d9">2.5k</span>
                            </div>
                            <div className="iconbox-s3 color-s2">
                                <div className="iconbox-icon"><i className="fa fa-behance" aria-hidden="true" /></div>
                                <span className="likes lt-sp16 f-w500 color-d9">3.2k</span>
                            </div>
                            <div className="iconbox-s3 color-s3">
                                <div className="iconbox-icon"><i className="fa fa-twitter" aria-hidden="true" /></div>
                                <span className="likes lt-sp16 f-w500 color-d9">10k</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="iconbox-s3 color-s4">
                                <div className="iconbox-icon"><i className="fa fa-facebook" aria-hidden="true" /></div>
                                <span className="likes lt-sp16 f-w500 color-d9">2.5k</span>
                            </div>
                            <div className="iconbox-s3 color-s5">
                                <div className="iconbox-icon"><i className="fa fa-instagram" aria-hidden="true" /></div>
                                <span className="likes lt-sp16 f-w500 color-d9">3.2k</span>
                            </div>
                            <div className="iconbox-s3 color-s1">
                                <div className="iconbox-icon"><i className="fa fa-instagram" aria-hidden="true" /></div>
                                <span className="likes lt-sp16 f-w500 color-d9">10k</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget widget-popular-post">
                    <h3 className="widget-title">Popular Post</h3>
                    <ul className="popular-post-list">
                        <li>
                            <div className="d-flex">
                                <span className="order-number">1</span><Link to="#">How to improve your color sense</Link>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex">
                                <span className="order-number">2</span><Link to="#" className="active">Most beautiful thing on our design platfrom.</Link>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex">
                                <span className="order-number">3</span><Link to="#">Typography tips</Link>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex">
                                <span className="order-number">4</span><Link to="#">UX Design practices: how to make web interface!</Link>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex">
                                <span className="order-number">5</span><Link to="#">Death of Graphic Design</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="widget widget-categories">
                    <h3 className="widget-title">Categories</h3>
                    <ul className="categories-list">
                        <li><Link to="#">All</Link><span>(53)</span></li>
                        <li><Link to="#">Design</Link><span>(10)</span></li>
                        <li><Link to="#">User experience</Link><span>(7)</span></li>
                        <li><Link to="#">Typography</Link><span>(6)</span></li>
                        <li><Link to="#">Color</Link><span>(5)</span></li>
                        <li><Link to="#">Freelancing</Link><span>(9)</span></li>
                    </ul>
                </div>
                <div className="widget widget-download text-center">
                    <div className="fl-btn btn-hv-common">
                        <Link to="#" className="btn-inner text-white">Download <br />Free Mockup</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
