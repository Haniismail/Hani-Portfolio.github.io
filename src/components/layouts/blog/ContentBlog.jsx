import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ContentBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog : [
                {
                    id: 1,
                    image: './images/blog/01.jpg',
                    alt: 'images',
                    author: 'Design',
                    date: 'May 12, 2020',
                    title: 'Creating a UI Component design system (step-by-step)...'
                },
                {
                    id: 2,
                    image: './images/blog/07.jpg',
                    alt: 'images',
                    author: 'Design',
                    date: 'May 12, 2020',
                    title: 'Developing your eye for design'
                },
                {
                    id: 3,
                    image: './images/blog/08.jpg',
                    alt: 'images',
                    author: 'Design',
                    date: 'May 12, 2020',
                    title: 'Creating a UI Component design system (step-by-step)...'
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="col-left">
                {
                    this.state.blog.map(data => (
                        <article className="blog-grid" key={data.id}>
                            <div className="featured-post"><img src={data.image} alt="images" /></div>
                            <div className="content-blog">
                                <div className="post-meta d-flex justify-content-between">
                                    <div className="meta-inner">
                                        <span className="author lt-sp03">{data.author}</span>
                                        <span className="date lt-sp01">{data.date}</span>
                                    </div>
                                    <Link to="#"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" /></svg></Link>
                                </div>
                            </div>
                            <h2 className="title"><Link to="#">{data.title}</Link></h2>
                        </article>
                    ))
                }
                <div className="flat-pagination blog-pagination">
                    <ul>
                        <li><Link to="#" className="page-numbers current">1</Link></li>
                        <li><Link to="#" className="page-numbers">2</Link></li>
                        <li><Link to="#" className="page-numbers">3</Link></li>
                        <li><Link to="#" className="page-numbers">4</Link></li>
                        <li><Link to="#" className="page-numbers">...</Link></li>
                        <li><Link to="#" className="page-numbers">9</Link></li>
                        <li><Link to="#" className="page-numbers"><i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ContentBlog;
