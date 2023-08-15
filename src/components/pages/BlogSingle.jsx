import React, { Component } from 'react';
import { Banner, ContentSingle, Sidebar, Header } from '../layouts/blog/index';

class BlogSingle extends Component {
    render() {
        return (
            <div className="counter-scroll">
                <div id="mobile-menu-overlay"><span className="tf-close"></span></div>
                <Header />
                <Banner />
                <div className="blog-single col-blog">
                    <div className="container d-lg-flex">
                        <div className="col-left">
                            <ContentSingle />
                        </div>
                        <div className="col-right">
                            <Sidebar />
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogSingle;
