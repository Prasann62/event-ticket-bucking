import React from 'react';
import rp1 from '../assets/r.p.1.jpg';
import rp2 from '../assets/r.p.2.jpg';
import sm1 from '../assets/sm.1.jpg';

const Artists = () => {
    const artists = [
        {
            id: 1,
            name: 'Rukmani Vasanth',
            image: rp1,
            text: '"Amazing experience! Loved the vibe and the performances. Will definitely come back for more."'
        },
        {
            id: 2,
            name: 'Sai Pallavi',
            image: rp2,
            text: '"The best event I\'ve attended this year. The organization was flawless. Highly recommended!"'
        },
        {
            id: 3,
            name: 'SM',
            image: sm1,
            text: '"Great organization and fantastic music. The atmosphere was electric. Can\'t wait for the next one."'
        }
    ];

    return (
        <section className="section" id="testimonials">
            <div className="section-header">
                <div className="section-tag">Reviews</div>
                <h2 className="section-title">ARTISTS</h2>
            </div>

            <div className="testimonials-grid">
                {artists.map((artist) => (
                    <div className="testimonial-card" key={artist.id}>
                        <img src={artist.image} alt={artist.name} className="testimonial-avatar" />
                        <p className="testimonial-text">{artist.text}</p>
                        <div className="testimonial-name">{artist.name}</div>
                    </div>
                ))}
            </div>

            <div className="events-view-more">
                <a href="#" className="btn-outline">View Artists</a>
            </div>
        </section>
    );
};

export default Artists;
