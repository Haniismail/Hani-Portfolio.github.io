import React, { Component } from 'react';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: [
        {
          id: 1,
          name: 'Reda Benembarek',
          position: 'Business Owner in Montreal, Quebec',
          image: 'images/testimonials/reda.jpeg',
          text: 'Having worked with Hani on specific project implementations, Hani is a great developer and communicator. Thorough and meticulous, he takes the time to analyze each problem and requirements from a backend, front-end and high level point of view, which allows for effective technology solutions that takes in account scaling and technology debt. His curiosity and ability to be adaptable is a rare skill',
          linkedIn:
            'https://www.linkedin.com/in/hanismail/details/recommendations/?detailScreenTabIndex=0',
        },
        {
          id: 2,
          name: 'Med Raed Besbes',
          position: 'Senior Software Engineer',
          image: 'images/testimonials/raed-pic.png',
          text: 'Hani is a dedicated software developer with a solid understanding of project requirements. During my time working with him as a tech lead, I observed his ability to follow instructions meticulously and effectively implement feedback. He consistently applied suggested improvements and demonstrated a strong commitment to learning. Hani is proactive, adaptable, and has shown great potential in his ability to grow and take on new challenges.',
          linkedIn:
            'https://www.linkedin.com/in/hanismail/details/recommendations/?detailScreenTabIndex=0',
        },
        {
          id: 3,
          name: 'Sdiri Ahmed',
          position: 'QA Tester Expert',
          image: 'images/testimonials/ahmed.jpeg',
          text: "J'ai eu l'opportunité de collaborer avec Hani Ismail, et je peux affirmer qu'il fait partie des profils techniques les plus complets et fiables avec qui j'ai travaillé.\nEn tant que Technical Lead et Full Stack Web Developer, Hani maîtrise parfaitement des technologies modernes comme Node.js, AWS, React et TypeScript. Son expertise technique est doublée d'une vraie capacité à encadrer les équipes, à structurer les projets et à garantir la qualité du code livré.\nHani se distingue par :\n ✔️ Son leadership technique et sa vision produit\n ✔️ Sa rigueur et son souci du détail\n ✔️ Sa polyvalence backend/frontend/cloud\n ✔️ Son excellent relationnel et son esprit d'équipe\nJe le recommande vivement pour tout projet ambitieux nécessitant un développeur expérimenté ou un lead technique de confiance.",
          linkedIn:
            'https://www.linkedin.com/in/hanismail/details/recommendations/?detailScreenTabIndex=0',
        },
      ],
      activeIndex: 0,
      isAnimating: false,
    };
    this.testimonialInterval = null;
  }

  componentDidMount() {
    this.startAutoSlide();
  }

  componentWillUnmount() {
    this.stopAutoSlide();
  }

  startAutoSlide = () => {
    this.testimonialInterval = setInterval(() => {
      this.nextTestimonial();
    }, 3000);
  };

  stopAutoSlide = () => {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
      this.testimonialInterval = null;
    }
  };

  nextTestimonial = () => {
    if (this.state.isAnimating) return;

    this.setState({ isAnimating: true });

    setTimeout(() => {
      this.setState((prevState) => ({
        activeIndex:
          (prevState.activeIndex + 1) % prevState.testimonials.length,
        isAnimating: false,
      }));
    }, 150);
  };

  handleDotClick = (index) => {
    if (this.state.isAnimating || index === this.state.activeIndex) return;

    this.setState({
      activeIndex: index,
      isAnimating: true,
    });

    setTimeout(() => {
      this.setState({ isAnimating: false });
    }, 300);
  };

  handleMouseEnter = () => {
    this.stopAutoSlide();
  };

  handleMouseLeave = () => {
    this.startAutoSlide();
  };

  render() {
    const { testimonials, activeIndex, isAnimating } = this.state;
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
                <div
                  className="testimonial-container"
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <div
                    className={`testimonial-content ${
                      isAnimating ? 'fade-out' : 'fade-in'
                    }`}
                  >
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

        <style jsx>{`
          .testimonial-content {
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
          }

          .testimonial-content.fade-in {
            opacity: 1;
            transform: translateY(0);
          }

          .testimonial-content.fade-out {
            opacity: 0;
            transform: translateY(-10px);
          }

          .testimonial-container {
            cursor: pointer;
          }

          .testimonial-dot {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #ccc;
            margin: 0 5px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .testimonial-dot:hover {
            background-color: #999;
            transform: scale(1.1);
          }

          .testimonial-dot.active {
            background-color: #4f46e5;
            transform: scale(1.2);
          }

          .testimonial-dots {
            text-align: center;
            margin-top: 30px;
          }

          .testimonial-author-image img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .testimonial-author-image img:hover {
            transform: scale(1.05);
          }
        `}</style>
      </div>
    );
  }
}

export default Testimonials;
