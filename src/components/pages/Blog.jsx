import React, { Component } from 'react';
import { Banner, ContentBlog, Footer, Sidebar, Header } from '../layouts/blog/index';

class Blog extends Component {
    render() {
        return (
            <div className="counter-scroll">
                <div id="mobile-menu-overlay"><span className="tf-close"></span></div>
                <Header />
                <Banner />
                <div className="blog col-blog">
                    <div className="container d-lg-flex">
                        <ContentBlog />
                        <div className="col-right">
                            <Sidebar />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Blog;
