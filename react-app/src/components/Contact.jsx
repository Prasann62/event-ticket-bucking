import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id.replace('contact', '').toLowerCase()]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        window.open(`https://wa.me/918608144068?text=${text}`, '_blank');
    };

    return (
        <section className="section section-dark" id="contact">
            <div className="section-header">
                <div className="section-tag">Get in Touch</div>
                <h2 className="section-title">BEAT ME</h2>
            </div>

            <div className="contact-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Your Name</label>
                        <input
                            type="text"
                            className="form-input"
                            id="contactName"
                            placeholder="Enter your name"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-input"
                            id="contactEmail"
                            placeholder="Enter your email"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Message</label>
                        <textarea
                            className="form-input"
                            id="contactMessage"
                            placeholder="Your message..."
                            required
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit" className="form-submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
