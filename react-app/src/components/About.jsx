import React from 'react';
import aboutImg from '../assets/about.jpg';

const About = () => {
    return (
        <section className="section section-dark" id="about">
            <div className="about-grid">
                <div className="about-content">
                    <div className="section-tag">About Us</div>
                    <h3>Experience Unforgettable Moments</h3>
                    <p>
                        Eventify brings electrifying concerts, sports matches, and glamorous parties to life.
                        Our mission is to create memorable experiences for everyone.
                    </p>
                    <p>
                        We partner with the best venues and artists to deliver world-class entertainment
                        that you'll remember forever.
                    </p>

                    <div className="about-info">
                        <div className="about-info-item">
                            <h6>Address</h6>
                            <p>123 Event Street, Tamil Nadu, India</p>
                        </div>
                        <div className="about-info-item">
                            <h6>Email</h6>
                            <p>contact@eventify.com</p>
                        </div>
                        <div className="about-info-item">
                            <h6>Phone</h6>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                </div>

                <div className="about-image">
                    <img src={aboutImg} alt="About Eventify" />
                </div>
            </div>
        </section>
    );
};

export default About;
