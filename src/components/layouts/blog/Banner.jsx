import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Banner extends Component {
    render() {
        return (
            <div className="page-title position-relative d-flex">
                <div className="overlay-left" />
                <div className="overlay-right" />
                <div className="container position-relative">
                    <div className="breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <h1 className="title mg-b29 text-white"><span className="img-inner">Blog</span></h1>
                            <ul className="breadcrumbs-inner">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
