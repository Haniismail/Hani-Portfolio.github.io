import React, { Component } from 'react';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: [
        {
          id: 1,
          name: 'Med Raed Besbes',
          position: 'Senior Software Engineer',
          image: 'images/testimonials/raed-pic.png',
          text: 'Hani is a dedicated software developer with a solid understanding of project requirements. During my time working with him as a tech lead, I observed his ability to follow instructions meticulously and effectively implement feedback. He consistently applied suggested improvements and demonstrated a strong commitment to learning. Hani is proactive, adaptable, and has shown great potential in his ability to grow and take on new challenges.',
          linkedIn: 'https://www.linkedin.com/in/med-raed-besbes-9b300566/',
        },
      ],
      activeIndex: 0,
    };
    this.testimonialInterval = null;
  }

  componentDidMount() {
    // No need to rotate with only one testimonial
  }

  componentWillUnmount() {
    // Clear interval when component unmounts
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }

  handleDotClick = (index) => {
    // No need to handle dot clicks with only one testimonial
    this.setState({ activeIndex: 0 });
  };

  render() {
    const { testimonials, activeIndex } = this.state;
    const activeTestimonial = testimonials[activeIndex];

    return (
      <div className="tf-modal-content">
        <section
          className="testimonials-section position-relative"
          id="testimonials"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 animate-element wow delay5 fadeInDown">
                <div className="flat-title t2 text-center">
                  <h4 className="sub-title mg-b22">Testimonials</h4>
                  <h2 className="title-section color-d12 mg-b41">
                    What People Say
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="testimonial-container">
                  <div className="testimonial-content">
                    <div className="testimonial-quote">
                      <i className="fa fa-quote-left"></i>
                    </div>
                    <p className="testimonial-text">{activeTestimonial.text}</p>
                    <div className="testimonial-author">
                      <div className="testimonial-author-image">
                        <img
                          src={activeTestimonial.image}
                          alt={activeTestimonial.name}
                        />
                      </div>
                      <div className="testimonial-author-info">
                        <a
                          href={activeTestimonial.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          <h4 className="testimonial-author-name">
                            {activeTestimonial.name}
                          </h4>
                          <p className="testimonial-author-position">
                            {activeTestimonial.position}
                          </p>
                          <small style={{ color: '#4f46e5' }}>
                            Click to view LinkedIn profile
                          </small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-dots">
                    {testimonials.map((testimonial, index) => (
                      <span
                        key={testimonial.id}
                        className={`testimonial-dot ${
                          index === activeIndex ? 'active' : ''
                        }`}
                        onClick={() => this.handleDotClick(index)}
                      ></span>
                    ))}
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

export default Testimonials;
