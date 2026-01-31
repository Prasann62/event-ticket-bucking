import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '../assets/about.jpg';

const About = () => {
    const stats = [
        { label: 'Events Hosted', value: '500+' },
        { label: 'Happy Customers', value: '100k+' },
        { label: 'Artists Partnered', value: '2k+' },
    ];

    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden" id="about">
            <div className="flex flex-col lg:flex-row items-center gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:w-1/2 relative"
                >
                    <div className="relative group">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-blue/20 rounded-full blur-[100px] animate-pulse"></div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-cyan/20 rounded-full blur-[100px] animate-pulse delay-700"></div>

                        <div className="relative z-10 glass rounded-[3.5rem] overflow-hidden p-3 border-white/10 group-hover:border-brand-blue/30 transition-colors duration-500">
                            <img
                                src={aboutImg}
                                alt="About Eventify"
                                className="rounded-[2.8rem] w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-8 -right-8 glass-dark p-8 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
                        >
                            <div className="text-brand-blue font-black text-4xl mb-1 tracking-tighter">2025</div>
                            <div className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">Global Excellence</div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-brand-cyan font-bold tracking-[0.3em] uppercase mb-4 text-sm"
                    >
                        Our Story
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
                        Experience <br />
                        <span className="gradient-text">Unforgettable</span> <br />
                        Moments
                    </h2>
                    <p className="text-white/50 text-xl mb-10 leading-relaxed font-light">
                        Eventify brings electrifying concerts, sports matches, and glamorous parties to life.
                        Our mission is to create <span className="text-white font-medium">memorable experiences</span> for everyone, bridging the gap between stars and fans.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {[
                            'World-class entertainment',
                            'Seamless booking experience',
                            'Exclusive artist access',
                            'Global venue partnerships'
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center space-x-4 text-white/70 font-medium group"
                            >
                                <div className="w-6 h-6 rounded-full bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20 group-hover:bg-brand-cyan/20 transition-colors">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                                </div>
                                <span className="group-hover:text-white transition-colors">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-10 pt-10 border-t border-white/5">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                            >
                                <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
                                <div className="text-white/30 text-[10px] uppercase font-bold tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
