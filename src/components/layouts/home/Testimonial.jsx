import React, { Component } from "react";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          id: 1,
          image: "./images/blog/04.jpg",
          alt: "images",
        },
        {
          id: 2,
          image: "./images/blog/09.jpg",
          alt: "images",
        },
        {
          id: 3,
          image: "./images/blog/10.jpg",
          alt: "images",
        },
      ],
      testimonial: [
        {
          id: 1,
          text: '"Because a great mind is never satisfied, I use all my time to build greate side project apps such as OptiPal, a face detection web app that recommends best suiting glasses for your faceshape”',
          name: "OptiPal",
          office: "(under construction)",
        },
        {
          id: 2,
          text: "Before working in software development I had the opportunity to work as a translator online with facebook, from which i gained so much experience and learned how to communicate in a constructive manner with the client”",
          name: "Freelance Translator ",
          office: "OneHourTranslation.com",
        },
        {
          id: 3,
          text: "Once into Tech, always into tech thus I write some tech blogs on medium.. I would be happy if you could give it a read and maybe tell me what you think !”",
          name: "Medium Blogs",
          office: "Medium",
        },
      ],
    };
  }

  render() {
    return (
      <div id="c_clients" className="tf-modalbox-wrapper">
        <div className="tf-modal-content">
          <section
            className="testimonial t2 s2 bg-s1 position-relative"
            id="testimonial"
          >
            <div className="background-right bg-cl2">
              <div className="text-testimonial color-d17">
                More things about me
              </div>
            </div>
            <div className="background-transparent bg-cl4"></div>
            <div className="container d-lg-flex">
              <div
                className="col-left animate-element wow delay5 fadeInDown"
                data-wow-delay="0.5s"
              >
                <div
                  className="flat-spacer"
                  data-desktop={4}
                  data-mobile={0}
                  data-smobile={0}
                />
              </div>
              <div
                className="col-right animate-element wow delay5 fadeInUp"
                data-wow-delay="0.5s"
              >
                <div
                  className="flat-spacer"
                  data-desktop={0}
                  data-mobile={100}
                  data-smobile={100}
                />
                <div className="flat-title t1">
                  <h4 className="sub-title mg-b13">
                    Things you don't know about me
                  </h4>
                  <h2 className="title-section color-d12">
                    More things about me..
                  </h2>
                </div>
                <div className="slider-drop-apps custom-dot dot-s1 none-nav-default mg-dots-s3">
                  <div
                    className="flat-carousel-box data-effect clearfix"
                    data-gap={0}
                    data-column={1}
                    data-column2={1}
                    data-column3={1}
                    data-column4={1}
                    data-column5={1}
                    data-dots="true"
                    data-auto="false"
                    data-nav="false"
                    data-loop="true"
                  >
                    <div className="owl-carousel">
                      {this.state.testimonial.map((data) => (
                        <div className="client-info" key={data.id}>
                          <p className="color-d16">{data.text}</p>
                          <div className="client-detail">
                            <span className="color-d6 f-w500">{data.name}</span>{" "}
                            {data.office}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Testimonial;
