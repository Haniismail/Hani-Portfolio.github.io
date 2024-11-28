import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Specilizing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [
        {
          id: 1,
          classimg: 'featured-post mg-b43',
          srcimg: './images/section/23.jpeg',
          altimg: 'images',
          title: 'Front-end web development',
          text01: 'React.js Redux and Sass',
          text02: 'JavaScript and Typscript',
        },
        {
          id: 2,
          classimg: 'featured-post mg-b42',
          srcimg: './images/section/22.jpeg',
          altimg: 'images',
          title: 'Back-end web development',
          text01: 'Node.js Express.js sequelize',
          text02: 'MongoDB MySQL',
        },
        {
          id: 3,
          classimg: 'featured-post mg-b40',
          srcimg: './images/section/20.jpeg',
          altimg: 'images',
          title: 'Full-stack web development',
          text01: 'A mixture of both frontend and backend technologies',
          text02: 'Result in a robust clean code and eaasy to maintain',
        },
      ],
    };
  }

  render() {
    return (
      <div className="tf-modal-content">
        <section className="experienced s3 banner-section" id="services">
          <div className="container">
            <div className="background-inner bg-s1">
              <div
                className="flat-title animate-element wow delay5 fadeInDown"
                data-wow-delay="0.5s"
              >
                <h2 className="title-section  mg-b44 text-center">
                  Hard Skills
                </h2>
              </div>
              <div
                className="row animate-element wow delay5 fadeInUp"
                data-wow-delay="0.5s"
              >
                {this.state.card.map((data) => (
                  <div className="col-lg-4" key={data.id}>
                    <div className="iconbox-s2">
                      <div className={data.classimg}>
                        <img src={data.srcimg} alt={data.altimg} />
                      </div>
                      <h3 className="title mg-b21">
                        <Link to="#">{data.title}</Link>
                      </h3>
                      <p>
                        {data.text01} <br />
                        {data.text02}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Specilizing;
