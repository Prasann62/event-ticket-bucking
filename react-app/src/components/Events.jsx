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
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {events.map((event) => (
                        <motion.div key={event.id} variants={itemVariants} className="glow-border">
                            <Card className="h-full flex flex-col group border-white/5 hover:border-brand-cyan/20">
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-brand-cyan text-sm font-bold border border-white/10 shadow-lg">
                                            {event.price}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                    {/* Animated Corner accent */}
                                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <CardContent className="flex-grow flex flex-col p-8">
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-cyan transition-colors duration-300">
                                        {event.title}
                                    </h3>
                                    <div className="space-y-4 mb-8 text-white/50 text-sm">
                                        <div className="flex items-center space-x-3 group/item">
                                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover/item:border-brand-blue/30 transition-colors">
                                                <Calendar className="w-4 h-4 text-brand-blue" />
                                            </div>
                                            <span className="group-hover:text-white transition-colors">{event.date}</span>
                                        </div>
                                        <div className="flex items-center space-x-3 group/item">
                                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover/item:border-brand-blue/30 transition-colors">
                                                <Clock className="w-4 h-4 text-brand-blue" />
                                            </div>
                                            <span className="group-hover:text-white transition-colors">{event.time}</span>
                                        </div>
                                        <div className="flex items-center space-x-3 group/item">
                                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover/item:border-brand-blue/30 transition-colors">
                                                <MapPin className="w-4 h-4 text-brand-blue" />
                                            </div>
                                            <span className="group-hover:text-white transition-colors">{event.location}</span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="primary"
                                        className="w-full mt-auto relative overflow-hidden group/btn"
                                        onClick={() => onBookNow(event.eventKey)}
                                    >
                                        <span className="relative z-10 flex items-center justify-center">
                                            Book Now
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </span>
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
