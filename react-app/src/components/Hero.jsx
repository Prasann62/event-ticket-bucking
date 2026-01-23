import React from 'react';
import heroBg from '../assets/bd.2.jpg';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <img src={heroBg} alt="Concert Experience" className="hero-bg" />

            <div className="hero-content">
                <div className="hero-tag">World-Class Recording & Production</div>
                <h1 className="hero-title">
                    <span>LIVE</span>
                    <span className="accent">EVENTS</span>
                </h1>
                <p className="hero-subtitle">
                    Experience the thrill of live music. Book your tickets for the most exclusive concerts,
                    DJ nights, and live performances across India.
                </p>
                <div className="hero-cta">
                    <a href="#events" className="btn-primary">View Events</a>
                    <a href="#about" className="btn-outline">Learn More</a>
                </div>
            </div>

            <div className="scroll-down">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
