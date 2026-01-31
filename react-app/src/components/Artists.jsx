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
                        className="text-brand-cyan font-semibold tracking-widest uppercase mb-4"
                    >
                        Reviews
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        What People <span className="gradient-text">Say</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {artists.map((artist, idx) => (
                        <motion.div
                            key={artist.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            className="glow-border"
                        >
                            <Card className="p-10 h-full flex flex-col items-center text-center group border-white/5 hover:border-brand-blue/30 backdrop-blur-3xl">
                                <div className="mb-8 relative">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-accent rounded-full blur opacity-20 group-hover:opacity-60 transition duration-700" />
                                    <img
                                        src={artist.image}
                                        alt={artist.name}
                                        className="relative w-28 h-28 rounded-full object-cover border-2 border-white/10 group-hover:border-white/30 transition-colors duration-500 shadow-2xl"
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-brand-blue p-2.5 rounded-full border-2 border-brand-bg shadow-xl z-10">
                                        <Quote className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                <div className="flex space-x-1.5 mb-6">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 fill-brand-cyan text-brand-cyan opacity-80" />
                                    ))}
                                </div>

                                <p className="text-white/50 italic mb-8 flex-grow leading-relaxed font-light text-lg">
                                    "{artist.text}"
                                </p>

                                <div className="pt-6 border-t border-white/5 w-full">
                                    <h4 className="text-xl font-black text-white tracking-tight mb-1">{artist.name}</h4>
                                    <p className="text-brand-cyan text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">{artist.role}</p>
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
