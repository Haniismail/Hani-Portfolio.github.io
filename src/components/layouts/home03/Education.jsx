import React, { Component } from 'react';
import { TopEducation } from './education/index';

class Education extends Component {
    render() {
        return (
            <div className="tf-modal-content">
                <section className="flat-education s3 position-relative banner-section" id="resume">
                    <div className="container">
                        <div className="flat-title t2 animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                            <h4 className="sub-title mg-b13">Educational qualification</h4>
                            <h2 className="title-section color-d12">Education &amp; Experience</h2>
                        </div>
                        <TopEducation />
                    </div>
                </section>
            </div>
        );
    }
}

export default Education;
