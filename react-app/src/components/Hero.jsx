import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import Hero3D from './Hero3D';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20" id="home">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Content Column */}
                    <div className="lg:w-1/2 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-cyan mb-8"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-semibold tracking-wider uppercase">Future of Live Events</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]"
                        >
                            Step Into The <br />
                            <span className="gradient-text">Metaverse</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="max-w-xl text-lg md:text-xl text-white/60 mb-10 leading-relaxed"
                        >
                            Experience concerts and festivals like never before. Our platform merges reality with 3D digital excellence for a premium booking experience.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
                        >
                            <Button variant="primary" size="lg" className="w-full sm:w-auto h-16 group px-8">
                                Explore Events
                                <motion.span
                                    className="inline-block ml-2"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    →
                                </motion.span>
                            </Button>
                            <Button variant="secondary" size="lg" className="w-full sm:w-auto h-16 px-8">
                                Get Started
                            </Button>
                        </motion.div>
                    </div>

                    {/* 3D Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                        className="lg:w-1/2 relative min-h-[400px] w-full"
                    >
                        <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[120px] animate-pulse -z-10"></div>
                        <Hero3D />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-white/30 cursor-pointer"
                    >
                        <ChevronDown className="w-8 h-8" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
