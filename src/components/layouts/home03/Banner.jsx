import React, { Component } from "react";
import HaniCV from "../home03/documents/cv.pdf";
class Banner extends Component {
  render() {
    return (
      <section className="banner-section s3 two-home" id="home">
        <div className="container">
          <div className="content-text position-relative">
            <div
              className="animate-element wow delay5 fadeInDown"
              data-wow-delay="0.3s"
            >
              <div className="tag color-d1 lt-sp53 mg-b24">
                Full stack web developer
              </div>
              <h1 className="cd-headline clip is-full-width title color-d2 mg-b31">
                <span>Hello, </span>
                <span className="cd-words-wrapper color-d6">
                  <b className="is-visible"> I’m Hani !</b>
                  <b> Web developer !!</b>
                  <b>Check out My portfolio
                  </b>
                </span>
              </h1>
              <p className="lt-sp02 mg-b51">
                Hi, i m Hani, full stack web developer with 2 years
                <br />
                of experience.
              </p>
            </div>
            <div
              className="animate-element wow delay5 fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fl-btn btn-general btn-hv-common color-s1">
                <a
                  href={HaniCV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-inner f-w500 color-d6 border-corner5 lt-sp01"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="featured-post border-corner-bl">
            <img src="images/section/35.jpg" alt="images" />
            <div
              className="site-list has-border text-center animate-element wow delay5 fadeInUp"
              data-wow-delay="0.3s"
            >
             
            </div>
          </div>
        </div>
        ¸
      </section>
    );
  }
}

export default Banner;
