import React, { Component } from 'react';
import {
  About,
  Banner,
  Education,
  Footer,
  Header,
  Skills,
  ProjectTimeline,
  Certificates,
  Testimonials,
  CallToAction,
  CareerProgression,
} from '../layouts/home/index';
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
            <Skills />
            <ProjectTimeline />
            <CareerProgression />
            <Testimonials />
            <Education />
            <Certificates />
            <CallToAction />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
