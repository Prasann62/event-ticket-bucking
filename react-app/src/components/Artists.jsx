import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import rp1 from '../assets/r.p.1.jpg';
import rp2 from '../assets/r.p.2.jpg';
import sm1 from '../assets/sm.1.jpg';

const Artists = () => {
    const artists = [
        {
            id: 1,
            name: 'Rukmani Vasanth',
            role: 'Lead Vocalist',
            image: rp1,
            text: 'Amazing experience! Loved the vibe and the performances. Will definitely come back for more.'
        },
        {
            id: 2,
            name: 'Sai Pallavi',
            role: 'Dancer & Performer',
            image: rp2,
            text: 'The best event I\'ve attended this year. The organization was flawless. Highly recommended!'
        },
        {
            id: 3,
            name: 'SM',
            role: 'Electronic Producer',
            image: sm1,
            text: 'Great organization and fantastic music. The atmosphere was electric. Can\'t wait for the next one.'
        }
    ];

    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden" id="testimonials">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-brand-accent font-semibold tracking-widest uppercase mb-4"
                    >
                        Reviews
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        What People <span className="gradient-text">Say</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {artists.map((artist, idx) => (
                        <motion.div
                            key={artist.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <Card className="p-8 h-full flex flex-col items-center text-center group">
                                <div className="mb-6 relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                                    <img
                                        src={artist.image}
                                        alt={artist.name}
                                        className="relative w-24 h-24 rounded-full object-cover border-2 border-white/10"
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-brand-accent p-2 rounded-full border-2 border-brand-bg shadow-xl">
                                        <Quote className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex space-x-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-white/60 italic mb-6 flex-grow">"{artist.text}"</p>
                                <div>
                                    <h4 className="text-lg font-bold text-white">{artist.name}</h4>
                                    <p className="text-brand-cyan text-xs uppercase tracking-widest">{artist.role}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Artists;
