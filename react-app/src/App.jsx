import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import About from './components/About';
import Artists from './components/Artists';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState('');

    const handleBookNow = (eventKey) => {
        setSelectedEvent(eventKey);
        setIsModalOpen(true);
    };

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Events onBookNow={handleBookNow} />
            <About />
            <Artists />
            <Contact />
            <Footer />

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                eventName={selectedEvent}
            />
        </div>
    );
}

export default App;
