import React, { Component } from "react";
import {
  About,
  Banner,
  CaseStudy,
  Education,
  Footer,
  Header,
  Specilizing,
} from "../layouts/home/index";
import  Testimonial  from "../layouts/home/Testimonial";
class Home extends Component {
  render() {
    return (
      <div className="body-copyright-light fixed counter-scroll has-one-page home3">
        <div id="mobile-menu-overlay">
          <span className="tf-close" />
        </div>
        <Header />
        <div id="content" className="content">
          <div className="homepage-personal">
            <Banner />
            <About />
            <Specilizing />
            <Education />
            <CaseStudy />
            <Testimonial />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
