import React, { Component } from "react";
import { Link } from "react-router-dom";
class CaseStudy extends Component {
  render() {
    return (
      <div className="tf-modal-content">
        <section className="flat-case-study s3" id="portfolio">
          <div className="container">
            <div className="d-md-flex">
              <div
                className="col-left animate-element wow delay5 fadeInDown"
                data-wow-delay="0.5s"
              >
                <div className="image-link t1">
                  <div className="portfolio-template-link text-center">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.takiacademy.takiacademykids&pcampaignid=web_share"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Taki Kids Backend
                    </a>
                  </div>
                  <div className="featured-post">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.takiacademy.takiacademykids&pcampaignid=web_share"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="images/section/takikids.jpeg" alt="images" />
                    </a>
                  </div>

                  <div className="portfolio-template-link text-center">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.softylines.studenthelp&pcampaignid=web_share"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Student help
                    </a>
                  </div>
                  <div className="featured-post">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.softylines.studenthelp&pcampaignid=web_share"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="images/section/studenthelp.jpg" alt="images" />
                    </a>
                  </div>
                </div>
                <div className="image-link t1">
                  <div className="portfolio-template-link text-center">
                    <a
                      href="https://takikids.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Takikids admin dashboard
                    </a>
                  </div>
                  <div className="featured-post">
                    <a
                      href="https://takikids.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="images/section/takikids.jpeg" alt="images" />
                    </a>
                  </div>
                </div>
                <div className="fl-btn text-center"></div>
              </div>
              <div
                className="flat-spacer"
                data-desktop={0}
                data-mobile={100}
                data-smobile={100}
              />
              <div
                className="col-right animate-element wow delay5 fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="flat-title t2 mg-b60">
                  <h4 className="sub-title mg-b13">Portfolio</h4>
                  <h2 className="title-section color-d12 mg-b20">
                    Few selected works.
                  </h2>
                  <p>Below I showcase some of the recent projects i built</p>
                </div>
                <div className="pd-right">
                  <div className="image-link t1">
                    <div className="portfolio-template-link text-center">
                      <a
                        href="https://proximabel.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Proximabel
                      </a>
                    </div>
                    <div className="featured-post">
                      <a
                        href="https://proximabel.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="images/section/proximabel.png" alt="images" />
                      </a>
                    </div>
                  </div>
                  <div className="image-link t1">
                    <div className="portfolio-template-link text-center">
                      <a
                        href=""
                        target="_blank"
                        rel="noreferrer"
                      >
                        Linkefoot (under construction)
                      </a>
                    </div>
                    <div className="featured-post">
                      <a
                        href=""
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="images/section/linkefoot.jpeg" alt="images" />
                      </a>
                    </div>
                  </div>
                  <div className="image-link t1">
                    <div className="portfolio-template-link text-center">
                      <a href="" target="_blank" rel="noreferrer">
                        OptiPal (under construction)
                      </a>
                    </div>
                    <div className="featured-post">
                      <a href="" target="_blank" rel="noreferrer">
                        <img src="images/section/optipal.jpeg" alt="images" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CaseStudy;
