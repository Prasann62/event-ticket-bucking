import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Events from './components/Events';
import About from './components/About';
import Artists from './components/Artists';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ResendTicketModal from './components/ResendTicketModal';
import ThreeScene from './components/ThreeScene';

const Divider = () => <div className="container mx-auto px-6"><div className="section-divider" /></div>;

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isResendModalOpen, setIsResendModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState('');

    const handleBookNow = (eventKey) => {
        setSelectedEvent(eventKey);
        setIsModalOpen(true);
    };

    return (
        <div className="App overflow-x-hidden relative min-h-screen">
            {/* Elite Background Layers */}
            <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
                {/* Noise Layer */}
                <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>

                {/* Animated Aurora Blobs */}
                <motion.div
                    animate={{
                        x: [0, 150, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-blue/30 blur-[180px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -120, 0],
                        y: [0, 150, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-brand-cyan/20 blur-[180px] rounded-full"
                />
                <motion.div
                    animate={{
                        opacity: [0.1, 0.4, 0.1],
                        scale: [1, 1.8, 1],
                        x: [0, 50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[30%] right-[5%] w-[40%] h-[40%] bg-brand-accent/15 blur-[150px] rounded-full"
                />
            </div>

            <ThreeScene />
            <Navbar />
            <Hero />
            <Divider />
            <Events onBookNow={handleBookNow} />
            <Divider />
            <About />
            <Divider />
            <Artists />
            <Divider />
            <Contact onResendTicket={() => setIsResendModalOpen(true)} />
            <Footer />

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                eventName={selectedEvent}
            />

            <ResendTicketModal
                isOpen={isResendModalOpen}
                onClose={() => setIsResendModalOpen(false)}
            />
        </div>
    );
}

export default App;
