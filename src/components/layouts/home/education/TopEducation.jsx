import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TopEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contenttop: [
        {
          id: 1,
          classname: 'experience-box experience-box-line t3',
          datawow: '0.3s',
          year: '2018-2021',
          title: 'Bachelor in CS and Networks',
        },
        {
          id: 2,
          classname: 'experience-box experience-box-line t3',
          datawow: '0.5s',
          year: '2021-2025',
          title: 'Software Engineering Degree',
        },
        {
          id: 3,
          classname: 'experience-box t3',
          datawow: '0.7s',
          year: '2021-2025',
          title: 'Work-Study Program',
          text: 'Upon excellent acedemic results I was selected to participate in a state sponsored 4 year work-study program',
        },
      ],
      contentbot: [
        {
          id: 1,
          classname: 'experience-box experience-box-line t3',
          datawow: '0.8s',
          year: '2018 - 2019',
          title: 'Freelance Translator',
          office: 'OneHourTranslation.com',
          text: 'Starting role was to deliver translations from and to (Arabic, English and French), upon promotion I got to rate the translations of other translators',
        },
        {
          id: 2,
          classname: 'experience-box experience-box-line t3',
          datawow: '1.2s',
          year: '2021 - Present',
          title: 'Full stack web developer at',
          office: 'Softylines',
          text: 'Architected, Built and Maintained several projects with various clients in optimal timing, upon promotion I lead a team of developers for teamwork and advisory purposes',
        },
        {
          id: 3,
          classname: 'experience-box t3',
          datawow: '1s',
          year: '2025 - Present',
          title: 'Freelance Consultant and Developer',
          office: 'Montreal, Québec',
          text: 'After gaining the trust of my clinet, I started to do more consulting roles such as suggesting features, discussing architecture and Developing features in fast paced environment while taking in consideration the technical debt',
        },
      ],
    };
  }

  render() {
    return (
      <div className="animate-element delay5 fadeInUp">
        <div className="padding-bottom">
          <div className="row">
            {this.state.contenttop.map((data) => (
              <div
                className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn"
                data-wow-delay={data.datawow}
                key={data.id}
              >
                <div className={data.classname}>
                  <div className="box-inner">
                    <h3 className="f-info bg-s1 color-d6">{data.year}</h3>
                    <div className="exp-wrap">
                      <div className="s-info mg-b11">{data.title}</div>
                      <p>{data.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          {this.state.contentbot.map((data) => (
            <div
              className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn"
              data-wow-delay={data.datawow}
              key={data.id}
            >
              <div className={data.classname}>
                <div className="box-inner">
                  <h3 className="f-info bg-s1 color-d6">{data.year}</h3>
                  <div className="exp-wrap">
                    <div className="s-info mg-b11">
                      {data.title} <Link to="#">{data.office}</Link>
                    </div>
                    <p>{data.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TopEducation;
