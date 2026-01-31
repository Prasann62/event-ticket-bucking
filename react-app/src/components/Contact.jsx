import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

const Contact = ({ onResendTicket }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        window.open(`https://wa.me/918608144068?text=${text}`, '_blank');
    };

    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden" id="contact">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <div className="text-brand-cyan font-semibold tracking-widest uppercase mb-4">Get in Touch</div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                            Let's <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="text-white/60 mb-10">
                            Have questions about an event? Or want to partner with us? Our team is here to help you 24/7.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Phone, label: 'Phone', value: '+91 86081 44068' },
                                { icon: Mail, label: 'Email', value: 'hello@eventify.com' },
                                { icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu, India' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-white/40 text-[10px] uppercase tracking-widest">{item.label}</div>
                                        <div className="text-white font-medium">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 rounded-3xl bg-brand-blue/10 border border-brand-blue/20">
                            <h3 className="text-xl font-bold mb-2">Already booked?</h3>
                            <p className="text-white/60 text-sm mb-4">
                                If you haven't received your ticket or lost it, you can request a resend here.
                            </p>
                            <Button
                                variant="outline"
                                className="w-full border-brand-accent/30 hover:bg-brand-accent/10"
                                onClick={onResendTicket}
                            >
                                Resend My Ticket
                                <Mail className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-2/3"
                    >
                        <Card className="p-10 md:p-14 relative overflow-hidden backdrop-blur-3xl border-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10"></div>

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-white/40 ml-1">Your Name</label>
                                        <div className="relative group">
                                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-cyan transition-colors duration-300">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-white/10 transition-all duration-300 shadow-inner"
                                                required
                                                onChange={handleChange}
                                                value={formData.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-white/40 ml-1">Email Address</label>
                                        <div className="relative group">
                                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-cyan transition-colors duration-300">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-white/10 transition-all duration-300 shadow-inner"
                                                required
                                                onChange={handleChange}
                                                value={formData.email}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-white/40 ml-1">Message</label>
                                    <div className="relative group">
                                        <div className="absolute left-5 top-6 text-white/20 group-focus-within:text-brand-cyan transition-colors duration-300">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <textarea
                                            name="message"
                                            rows="5"
                                            placeholder="Your message..."
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:bg-white/10 transition-all duration-300 shadow-inner resize-none"
                                            required
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full h-18 text-xl group relative overflow-hidden">
                                    <span className="relative z-10 flex items-center justify-center font-black tracking-tight">
                                        Send Message
                                        <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </span>
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
