import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ContentSingle extends Component {
    render() {
        return (
            <div className="main-post">
                <div className="featured-post"><img src="images/blog/01.jpg" alt="images" /></div>
                <div className="content-blog">
                    <div className="post-meta d-flex justify-content-between">
                        <div className="meta-inner">
                        <span className="author lt-sp03">Design</span>
                        <span className="date lt-sp01">May 12, 2020</span>
                        </div>
                        <Link to="#"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" /></svg></Link>
                    </div>{/* post-meta */}
                    <h2 className="title">
                        <Link to="#">Basic terms you should know in UX design.</Link>
                    </h2>{/* title */}
                    <div className="mg-b60 d-sm-flex justify-content-between">
                        <div className="author-info-bls t1 d-flex">
                        <div className="avatar">
                            <img src="images/blog/02.jpg" alt="images" />
                            <div className="socials-list">
                            <Link to="#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                            <Link to="#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                            <Link to="#"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                            </div>
                        </div>
                        <div className="author-details">
                            <h3 className="name color-d3 lt-sp09">Perry Smith</h3>
                            <div className="inner">
                            <span className="post-date lt-sp02">July 8, 2018</span>
                            <span className="view"><i className="fa fa-eye" aria-hidden="true" /> 3.6k</span>
                            </div>
                            <div className="c-follow"><Link to="#" className="color-d3 lt-sp02">Follow</Link></div>
                        </div>
                        </div>
                        <div className="circle-box">
                        <div className="chart text-center" data-percent={50}>
                            <div className="circle-inner">
                            <span className="post-number color-d3">15</span>
                            <p className="color-d7">Post</p>
                            </div>
                        </div>
                        </div>
                    </div>{/* author-post */}
                    <div className="description">
                        <p>
                        Generally, a UX designers conduct user research, design, write UX copy, validate/test with user and sell/present the design solution to the business. It's the UX designer's role to be the voice of the user and advocate for the users needs while balancing the business goals
                        </p>
                        <p>
                        Learn to think like a great designer. One common mistake designers make when they want to improve their design skills is trying to create trendy.
                        </p>
                        <p>
                        Even at the entry level, UX salaries are impressive: According to Sullivan, Glassdoor's data currently has UX designer salary averages sitting at $80,928 per year for entry level jobs (0-1 years of experience), $104,580 per year for mid-level (7-9 years of experience), and $113,368 per year for senior positions.
                        </p>
                        <p>
                        It's a very creative fast-paced role that holds a lot of weight and companies to understand enough to hire someone to do it. ... UX gives me a path to understand my user and build a design (and consequently a software) which will enrich/make easy his life in some way. This prospect is very fulfilling and interesting to me.
                        </p>
                    </div>{/* description */}
                    <div className="bottom-details d-sm-flex justify-content-between">
                        <div className="comment-likes">
                        <div className="d-flex">
                            <div className="iconbox-s5 color-s1">
                            <span className="box-inner border-corner2"><i className="fa fa-comment" aria-hidden="true" /></span><span className="number f-w500 color-d10">150</span>
                            </div>
                            <div className="iconbox-s5 color-s2">
                            <span className="box-inner border-corner2"><i className="fa fa-thumbs-up" aria-hidden="true" /></span><span className="number f-w500 color-d3">1.2k</span>
                            </div>
                        </div>
                        </div>
                        <div className="review">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <span className="number-of-reviewers">(36)</span>
                        </div>
                    </div>{/* bottom-comment */}
                    <div className="reviews">
                        <div className="mg-b21 d-sm-flex justify-content-between">
                        <h3 className="title">How Helpful It was? Please Make community Stronger.</h3>
                        <div className="comment-by-stars">
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                        </div>
                        </div>
                        <form className="review-form">
                        <textarea name="message" placeholder="Type your comment here" defaultValue={""} />
                        <div className="fl-btn btn-general btn-hv-common"><Link to="#" className="btn-inner border-corner2 text-white">Add Comment</Link></div>
                        </form>
                    </div>{/* reviews */}
                    <div className="comments-area">
                        <div className="comments">
                            <ul className="comments-list">
                                <li>
                                    <div className="comment-wrap">
                                        <div className="author-info-bls t2 position-relative d-flex">
                                            <div className="avatar">
                                                <img src="images/blog/03.jpg" alt="images" />
                                            </div>
                                            <div className="author-details">
                                                <h3 className="name f-w500 color-d3 lt-sp09">Danial Tim</h3>
                                                <div className="inner">
                                                    <span className="post-date lt-sp02">Comment</span>
                                                    <span className="view">July 8, 2018</span>
                                                </div>
                                                <div className="c-follow"><Link to="#" className="color-d3 lt-sp02">Follow</Link></div>
                                            </div>
                                            <div className="reply"><Link to="#"><i className="fa fa-reply" aria-hidden="true" /></Link></div>
                                        </div>
                                        <p>
                                        Generally, a UX designers conduct user research, design, write UX copy, validate/test with user and sell/present the design solution to the business. UX designers conduct user research, design, write UX copy,
                                        </p>
                                        <div className="d-lg-flex justify-content-between">
                                            <div className="comment-by-stars">
                                                <i className="fa fa-star" aria-hidden="true" />
                                                <i className="fa fa-star" aria-hidden="true" />
                                                <i className="fa fa-star" aria-hidden="true" />
                                                <i className="fa fa-star" aria-hidden="true" />
                                                <i className="fa fa-star" aria-hidden="true" />
                                            </div>
                                            <div className="answer-question">
                                                <span className="question f-w500 color-d7">Helpful ?</span>
                                                <Link to="#" className="border-corner2 f-w500 color-d8">Yes(3)</Link>
                                                <Link to="#" className="border-corner2 f-w500 color-d8">No</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="comment-wrap">
                                        <div className="author-info-bls t2 position-relative d-flex">
                                        <div className="avatar">
                                            <img src="images/blog/04.jpg" alt="images" />
                                        </div>
                                        <div className="author-details">
                                            <h3 className="name f-w500 color-d3 lt-sp09">Martin Simons</h3>
                                            <div className="inner">
                                                <span className="post-date lt-sp02">Comment</span>
                                                <span className="view">July 8, 2018</span>
                                            </div>
                                            <div className="c-follow"><Link to="#" className="color-d3 lt-sp02">Follow</Link></div>
                                        </div>
                                        <div className="reply"><Link to="#"><i className="fa fa-reply" aria-hidden="true" /></Link></div>
                                        </div>
                                        <p>
                                        UX designers conduct user research, design, write UX validate with user &amp; sell/present the design solution to the business. 
                                        </p>
                                        <div className="d-lg-flex justify-content-between">
                                        <div className="comment-by-stars">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </div>
                                        <div className="answer-question">
                                            <span className="question f-w500 color-d7">Helpful ?</span>
                                            <Link to="#" className="border-corner2 f-w500 color-d8">Yes(3)</Link>
                                            <Link to="#" className="border-corner2 f-w500 color-d8">No</Link>
                                        </div>
                                        </div>
                                    </div>
                                    <ul className="sub-comment">
                                        <li>
                                            <div className="comment-wrap">
                                                <div className="author-info-bls t2 position-relative d-flex">
                                                    <div className="avatar">
                                                        <img src="images/blog/03.jpg" alt="images" />
                                                    </div>
                                                    <div className="author-details">
                                                        <h3 className="name f-w500 color-d3 lt-sp09">Danial Tim</h3>
                                                        <div className="inner">
                                                            <span className="post-date lt-sp02">Comment</span>
                                                            <span className="view">July 8, 2018</span>
                                                        </div>
                                                        <div className="c-follow"><Link to="#" className="color-d3 lt-sp02">Follow</Link></div>
                                                    </div>
                                                    <div className="reply"><Link to="#"><i className="fa fa-reply" aria-hidden="true" /></Link></div>
                                                    </div>
                                                    <p>
                                                    Designers conduct user research, design, UX validate/test with user and the design solution to business. 
                                                    </p>
                                                    <div className="d-lg-flex justify-content-end">
                                                    <div className="answer-question">
                                                        <span className="question f-w500 color-d7">Helpful ?</span>
                                                        <Link to="#" className="border-corner2 f-w500 color-d8">Yes(3)</Link>
                                                        <Link to="#" className="border-corner2 f-w500 color-d8">No</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-wrap">
                                                <div className="author-info-bls t2 position-relative d-flex">
                                                    <div className="avatar">
                                                        <img src="images/blog/04.jpg" alt="images" />
                                                    </div>
                                                    <div className="author-details">
                                                        <h3 className="name f-w500 color-d3 lt-sp09">Martin Simons</h3>
                                                        <div className="inner">
                                                        <span className="post-date lt-sp02">Comment</span>
                                                        <span className="view">July 8, 2018</span>
                                                        </div>
                                                        <div className="c-follow"><Link to="#" className="color-d3 lt-sp02">Follow</Link></div>
                                                    </div>
                                                    <div className="reply"><Link to="#"><i className="fa fa-reply" aria-hidden="true" /></Link></div>
                                                    </div>
                                                    <p>
                                                    Design refers to the term User Experience Design, while Design stands for User Interface Design. Both elements are crucial to a product and work closely together. But their professionals relationship, the roles themselves are quite different, referring to very different parts of the process and the design discipline.it makes the user feel easy. 
                                                    </p>
                                                    <div className="d-lg-flex justify-content-end">
                                                    <div className="answer-question">
                                                        <span className="question f-w500 color-d7">Helpful ?</span>
                                                        <Link to="#" className="border-corner2 f-w500 color-d8">Yes(3)</Link>
                                                        <Link to="#" className="border-corner2 f-w500 color-d8">No</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="comment-wrap">
                                        <div className="author-info-bls t2 position-relative d-flex">
                                            <div className="avatar">
                                                <img src="images/blog/05.jpg" alt="images" />
                                            </div>
                                            <div className="author-details">
                                                <h3 className="name f-w500 color-d3 lt-sp09">Sam White</h3>
                                                <div className="inner">
                                                    <span className="post-date lt-sp02">Comment</span>
                                                    <span className="view">July 8, 2018</span>
                                                </div>
                                                <div className="c-follow"><Link to="#" className="color-d3 lt-sp02">Follow</Link></div>
                                            </div>
                                            <div className="reply"><Link to="#"><i className="fa fa-reply" aria-hidden="true" /></Link></div>
                                        </div>
                                        <p>
                                        Generally, a UX designers conduct user research, design, write UX copy, validate/test with user and sell/present the design solution to the business. UX designers conduct user research, design, write UX copy,
                                        </p>
                                        <div className="d-lg-flex justify-content-between">
                                            <div className="comment-by-stars">
                                                <i className="fa fa-star" aria-hidden="true" />
                                                <i className="fa fa-star" aria-hidden="true" />
                                                <i className="fa fa-star" aria-hidden="true" />
                                                <i className="fa fa-star" aria-hidden="true" />
                                                <i className="fa fa-star" aria-hidden="true" />
                                            </div>
                                            <div className="answer-question">
                                                <span className="question f-w500 color-d7">Helpful ?</span>
                                                <Link to="#" className="border-corner2 f-w500 color-d8">Yes(3)</Link>
                                                <Link to="#" className="border-corner2 f-w500 color-d8">No</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>{/* comments-area */}
                    <div className="tags-list">
                        <Link to="#">Design</Link>
                        <Link to="#">UX Design</Link>
                        <Link to="#">Work</Link>
                        <Link to="#">Design Thinking</Link>
                        <Link to="#">UI Design</Link>
                    </div>{/* tags-list */}
                </div>
            </div>
        );
    }
}

export default ContentSingle;
