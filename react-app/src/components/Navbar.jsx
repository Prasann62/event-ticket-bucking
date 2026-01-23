import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Ticket } from 'lucide-react';
import { Button } from './ui/Button';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuActive(!menuActive);

    const navLinks = [
        { name: 'Events', href: '#events' },
        { name: 'About', href: '#about' },
        { name: 'Artists', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center space-x-2 text-2xl font-bold tracking-tighter">
                    <Ticket className="w-8 h-8 text-brand-accent" />
                    <span className="gradient-text">EVENTIFY</span>
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                    <li>
                        <Button variant="primary" size="sm">Get Started</Button>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={toggleMenu}
                >
                    {menuActive ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {menuActive && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/90 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
                    >
                        <ul className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMenuActive(false)}
                                        className="text-lg font-medium text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <Button variant="primary" onClick={() => setMenuActive(false)}>Get Started</Button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
