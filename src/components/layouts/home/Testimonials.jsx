import React, { Component } from 'react';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: [
        {
          id: 1,
          name: 'Sarah Johnson',
          position: 'Project Manager at TechCorp',
          image: 'images/testimonials/testimonial1.jpg',
          text: 'Hani is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are impressive. He was able to tackle complex challenges in our project with innovative solutions.',
        },
        {
          id: 2,
          name: 'Michael Chen',
          position: 'CTO at StartupX',
          image: 'images/testimonials/testimonial2.jpg',
          text: 'Working with Hani was a great experience. He not only delivered the technical requirements but also provided valuable insights that improved our product. His communication skills and professionalism made the collaboration smooth and effective.',
        },
        {
          id: 3,
          name: 'Emma Rodriguez',
          position: 'Lead Developer at WebSolutions',
          image: 'images/testimonials/testimonial3.jpg',
          text: 'Hani is a talented full-stack developer with a deep understanding of both frontend and backend technologies. He quickly became an integral part of our team and contributed significantly to the success of our project.',
        }
      ],
      activeIndex: 0
    };
    this.testimonialInterval = null;
  }

  componentDidMount() {
    // Auto-rotate testimonials
    this.testimonialInterval = setInterval(() => {
      this.setState(prevState => ({
        activeIndex: (prevState.activeIndex + 1) % this.state.testimonials.length
      }));
    }, 5000);
  }

  componentWillUnmount() {
    // Clear interval when component unmounts
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }

  handleDotClick = (index) => {
    this.setState({ activeIndex: index });
    // Reset interval when manually changing testimonial
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
    this.testimonialInterval = setInterval(() => {
      this.setState(prevState => ({
        activeIndex: (prevState.activeIndex + 1) % this.state.testimonials.length
      }));
    }, 5000);
  }

  render() {
    const { testimonials, activeIndex } = this.state;
    const activeTestimonial = testimonials[activeIndex];

    return (
      <div className="tf-modal-content">
        <section className="testimonials-section position-relative" id="testimonials">
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
                        <img src={activeTestimonial.image} alt={activeTestimonial.name} />
                      </div>
                      <div className="testimonial-author-info">
                        <h4 className="testimonial-author-name">{activeTestimonial.name}</h4>
                        <p className="testimonial-author-position">{activeTestimonial.position}</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-dots">
                    {testimonials.map((testimonial, index) => (
                      <span 
                        key={testimonial.id} 
                        className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
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
