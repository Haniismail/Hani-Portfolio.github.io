import React, { Component } from 'react';
import HaniCV from './documents/cv.pdf';
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
                Welcome aboard !
              </div>
              <h1
                style={{ fontSize: '45px' }}
                className="cd-headline clip is-full-width title color-d2 mg-b31"
              >
                <span>Hello! &nbsp;</span>

                <span className="cd-words-wrapper color-d6">
                  <b style={{ fontSize: '45px' }} className="is-visible">
                    {' '}
                    My name is Hani ISMAIL
                  </b>
                  <b style={{ fontSize: '45px' }}> I'm a web developer </b>
                  <b style={{ fontSize: '45px' }}>I make app architectures</b>
                  <b style={{ fontSize: '45px' }}>
                    I also have my share of Devops
                  </b>
                  <b style={{ fontSize: '45px' }}>
                    I'm a former part time translator btw
                  </b>
                  <b style={{ fontSize: '45px' }}>Reach out to me </b>
                </span>
              </h1>
              <p className="lt-sp02 mg-b51">
                Tech Lead and Full-stack Developer (backend heavy) based in
                Tunisia with 4 years of hands-on web development experience
                specializing in modeling backend architecture as an AWS
                Solutions Architect Associate certificate holder.
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
            ></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
