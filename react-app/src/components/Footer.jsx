import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Github, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-bg pt-24 pb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center space-x-2 text-3xl font-bold tracking-tighter mb-6">
                            <Ticket className="w-8 h-8 text-brand-accent" />
                            <span className="gradient-text">EVENTIFY</span>
                        </a>
                        <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
                            The ultimate destination for booking tickets to the world's most exclusive events.
                            Experience music, sports, and art like never before.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Instagram, Github, Linkedin].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-accent hover:border-brand-accent transition-all shadow-lg"
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {['Events', 'About', 'Artists', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-brand-cyan transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-sm text-white/40 mb-4">Stay updated with latest events.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:text-brand-accent transition-colors">
                                <Ticket className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/30">
                    <p>&copy; {currentYear} Eventify. Crafting unforgettable memories.</p>
                    <div className="flex items-center space-x-1">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                        <span>for the fans</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
