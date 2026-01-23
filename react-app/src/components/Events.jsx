import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import ev1 from '../assets/ev.1.jpg';
import ev2 from '../assets/ev.2.jpg';
import ev3 from '../assets/ev.3.jpg';

const Events = ({ onBookNow }) => {
    const events = [
        {
            id: 1,
            title: 'Music Concert',
            date: '20th Sept 2025',
            time: '6:00 PM',
            location: 'Chennai Stadium',
            price: '$49',
            image: ev1,
            eventKey: 'MUSIC CONCERT - Chennai Stadium'
        },
        {
            id: 2,
            title: 'DJ Night Party',
            date: '31st Aug 2025',
            time: '8:30 PM',
            location: 'Bangalore Club',
            price: '$35',
            image: ev2,
            eventKey: 'DJ NIGHT PARTY - Bangalore Club'
        },
        {
            id: 3,
            title: 'Live Performance',
            date: '30th Sept 2025',
            time: '7:00 PM',
            location: 'Coimbatore Arena',
            price: '$59',
            image: ev3,
            eventKey: 'LIVE PERFORMANCE - Coimbatore Arena'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden" id="events">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-accent font-semibold tracking-widest uppercase mb-4"
                    >
                        Upcoming
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight"
                    >
                        Featured <span className="gradient-text">Events</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {events.map((event) => (
                        <motion.div key={event.id} variants={itemVariants}>
                            <Card className="h-full flex flex-col group">
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-brand-cyan text-sm font-bold border border-white/10">
                                            {event.price}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <CardContent className="flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-brand-accent transition-colors">
                                        {event.title}
                                    </h3>
                                    <div className="space-y-3 mb-8 text-white/60 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="w-4 h-4 text-brand-accent" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Clock className="w-4 h-4 text-brand-accent" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="w-4 h-4 text-brand-accent" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="primary"
                                        className="w-full mt-auto"
                                        onClick={() => onBookNow(event.eventKey)}
                                    >
                                        Book Now
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <Button variant="outline">
                        View All Records
                    </Button>
                </div>
            </div >
        </section >
    );
};

export default Events;
