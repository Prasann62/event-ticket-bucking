import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Mail, Phone, MapPin } from 'lucide-react';
import aboutImg from '../assets/about.jpg';

const About = () => {
    const stats = [
        { label: 'Events Hosted', value: '500+' },
        { label: 'Happy Customers', value: '100k+' },
        { label: 'Artists Partnered', value: '2k+' },
    ];

    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden" id="about">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="relative z-10 glass rounded-[3rem] overflow-hidden p-2">
                                <img
                                    src={aboutImg}
                                    alt="About Eventify"
                                    className="rounded-[2.5rem] w-full h-[500px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 glass-dark p-6 rounded-3xl border border-white/10 shadow-2xl">
                                <div className="text-brand-accent font-bold text-3xl">2025</div>
                                <div className="text-white/50 text-xs uppercase tracking-widest">Global Excellence</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="text-brand-accent font-semibold tracking-widest uppercase mb-4">About Us</div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                            Experience <span className="gradient-text">Unforgettable</span> Moments
                        </h2>
                        <p className="text-white/60 text-lg mb-8 leading-relaxed">
                            Eventify brings electrifying concerts, sports matches, and glamorous parties to life.
                            Our mission is to create memorable experiences for everyone, bridging the gap between stars and fans.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {[
                                'World-class entertainment',
                                'Seamless booking experience',
                                'Exclusive artist access',
                                'Global venue partnerships'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3 text-white/80 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
