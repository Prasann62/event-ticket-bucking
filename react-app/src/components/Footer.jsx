import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">EVENTIFY</div>
                <div className="footer-links">
                    <a href="#events">Events</a>
                    <a href="#about">About</a>
                    <a href="#testimonials">Artists</a>
                    <a href="#contact">Contact</a>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                </div>
            </div>
            <div className="footer-copyright">
                &copy; 2025 Eventify. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
