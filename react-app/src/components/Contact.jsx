import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

const Contact = () => {
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
                        <div className="text-brand-accent font-semibold tracking-widest uppercase mb-4">Get in Touch</div>
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
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-white/40 text-[10px] uppercase tracking-widest">{item.label}</div>
                                        <div className="text-white font-medium">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <Card className="p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/60 ml-1">Your Name</label>
                                        <div className="relative group">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-brand-accent transition-colors">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                                                required
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/60 ml-1">Email Address</label>
                                        <div className="relative group">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-brand-accent transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                                                required
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/60 ml-1">Message</label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-5 text-white/30 group-focus-within:text-brand-accent transition-colors">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <textarea
                                            name="message"
                                            rows="5"
                                            placeholder="Your message..."
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all resize-none"
                                            required
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full h-16 text-lg group">
                                    Send Message
                                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
