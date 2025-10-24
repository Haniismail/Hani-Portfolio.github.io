import React, { Component } from 'react';

class Certificates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certificates: [
        {
          id: 1,
          title: 'AWS Solutions Architect',
          issuer: 'Amazon Web Services',
          date: 'October 2025',
          description:
            'Certified in designing cloud systems on AWS, demonstrating expertise in AWS architecture best practices.',
          icon: 'fa-cloud',
        },
        {
          id: 2,
          title: "TEF (Test d'Évaluation de Français)",
          issuer: 'Paris Île-de-France',
          date: 'October 2024',
          description:
            'Achieved C1 level certification in French language proficiency, demonstrating advanced communication skills.',
          icon: 'fa-language',
        },
        {
          id: 3,
          title: 'IELTS (International English Language Testing System)',
          issuer: 'British Council',
          date: 'May 2025',
          description:
            'Achieved C1 level certification in English language proficiency, demonstrating advanced communication skills.',
          icon: 'fa-language',
        },
      ],
    };
  }

  render() {
    const { certificates } = this.state;

    return (
      <div className="tf-modal-content">
        <section
          className="certificates-section position-relative"
          id="certificates"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 animate-element wow delay5 fadeInDown">
                <div className="flat-title t2 text-center">
                  <h4 className="sub-title mg-b22">My Certifications</h4>
                  <h2 className="title-section color-d12 mg-b41">
                    Professional Credentials
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              {certificates.map((certificate) => (
                <div className="col-md-4 mb-4" key={certificate.id}>
                  <div className="certificate-card">
                    <div className="certificate-icon">
                      <i className={`fa ${certificate.icon}`}></i>
                    </div>
                    <div className="certificate-content">
                      <h3 className="certificate-title">{certificate.title}</h3>
                      <div className="certificate-issuer">
                        {certificate.issuer}
                      </div>
                      <div className="certificate-date">{certificate.date}</div>
                      <p className="certificate-description">
                        {certificate.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Certificates;
