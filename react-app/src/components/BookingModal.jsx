import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CreditCard, User, Mail, Phone, Hash } from 'lucide-react';
import Swal from 'sweetalert2';
import { Button } from './ui/Button';

const BookingModal = ({ isOpen, onClose, eventName }) => {
    const [formData, setFormData] = useState({
        nm: '',
        em: '',
        pho: '',
        noft: 1
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('http://localhost:5000/api/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.nm,
                    email: formData.em,
                    phone: formData.pho,
                    noft: formData.noft,
                    event: eventName
                })
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Booking Confirmed!',
                    text: 'Your tickets have been booked successfully.',
                    icon: 'success',
                    confirmButtonText: 'Great!',
                    confirmButtonColor: '#8b5cf6',
                    background: '#0b0f19',
                    color: '#ffffff',
                    padding: '2rem',
                    customClass: {
                        popup: 'rounded-3xl border border-white/10'
                    }
                }).then(() => {
                    onClose();
                    setFormData({ nm: '', em: '', pho: '', noft: 1 });
                });
            } else {
                throw new Error('Booking failed');
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Booking failed. Please try again.',
                icon: 'error',
                confirmButtonColor: '#8b5cf6',
                background: '#0b0f19',
                color: '#ffffff'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg glass-dark rounded-[2.5rem] overflow-hidden"
                    >
                        <div className="p-8 md:p-12">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold gradient-text">Book Tickets</h2>
                                    <p className="text-white/50 text-sm mt-1">{eventName}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors group-focus-within:text-brand-accent">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="text"
                                            name="nm"
                                            placeholder="Your Full Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                                            required
                                            value={formData.nm}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors group-focus-within:text-brand-accent">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="email"
                                            name="em"
                                            placeholder="Email Address"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                                            required
                                            value={formData.em}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="relative group">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors group-focus-within:text-brand-accent">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="tel"
                                                name="pho"
                                                placeholder="Phone"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                                                required
                                                value={formData.pho}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="relative group">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors group-focus-within:text-brand-accent">
                                                <Hash className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="number"
                                                name="noft"
                                                placeholder="Tickets"
                                                min="1"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                                                required
                                                value={formData.noft}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-16 text-lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                            className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                                        />
                                    ) : (
                                        <>
                                            Confirm Booking
                                            <CreditCard className="ml-2 w-5 h-5" />
                                        </>
                                    )}
                                </Button>

                                <p className="text-center text-white/30 text-xs">
                                    Secure payment powered by Stripe. No hidden fees.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
