import React from 'react';
import ev1 from '../assets/ev.1.jpg';
import ev2 from '../assets/ev.2.jpg';
import ev3 from '../assets/ev.3.jpg';

const Events = ({ onBookNow }) => {
    const events = [
        {
            id: 1,
            title: 'Music Concert',
            date: '20th September 2025',
            time: '6:00 PM',
            location: 'Chennai Stadium',
            image: ev1,
            eventKey: 'MUSIC CONCERT - Chennai Stadium'
        },
        {
            id: 2,
            title: 'DJ Night Party',
            date: '31st August 2025',
            time: '8:30 PM',
            location: 'Bangalore Club',
            image: ev2,
            eventKey: 'DJ NIGHT PARTY - Bangalore Club'
        },
        {
            id: 3,
            title: 'Live Performance',
            date: '30th September 2025',
            time: '7:00 PM',
            location: 'Coimbatore Arena',
            image: ev3,
            eventKey: 'LIVE PERFORMANCE - Coimbatore Arena'
        }
    ];

    return (
        <section className="section" id="events">
            <div className="section-header">
                <div className="section-tag">Upcoming</div>
                <h2 className="section-title">EVENTS</h2>
            </div>

            <div className="events-grid">
                {events.map((event) => (
                    <div className="event-card" key={event.id}>
                        <div className="event-card-image">
                            <img src={event.image} alt={event.title} />
                        </div>
                        <div className="event-card-content">
                            <h3 className="event-card-title">{event.title}</h3>
                            <p className="event-card-meta"><span>📅</span> {event.date}</p>
                            <p className="event-card-meta"><span>⏰</span> {event.time}</p>
                            <p className="event-card-meta"><span>📍</span> {event.location}</p>
                            <button
                                className="event-card-btn"
                                onClick={() => onBookNow(event.eventKey)}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="events-view-more">
                <a href="#" className="btn-outline">View Records</a>
            </div>
        </section>
    );
};

export default Events;
