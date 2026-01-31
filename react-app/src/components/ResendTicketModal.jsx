import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import Swal from 'sweetalert2';
import { Button } from './ui/Button';

const ResendTicketModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('http://localhost:5000/api/resend-ticket', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: 'Ticket Sent!',
                    text: 'Your latest ticket has been resent to your email.',
                    icon: 'success',
                    confirmButtonColor: '#8b5cf6',
                    background: '#0b0f19',
                    color: '#ffffff'
                });
                onClose();
                setEmail('');
            } else {
                throw new Error(data.error || 'Failed to resend ticket');
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message,
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
                        className="relative w-full max-w-md glass-dark rounded-[2.5rem] overflow-hidden"
                    >
                        <div className="p-8 md:p-10">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold gradient-text">Lose your ticket?</h2>
                                    <p className="text-white/50 text-sm mt-1">We'll send it back to you</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/60 ml-1">Email Address</label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors group-focus-within:text-brand-accent">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="Enter your registered email"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-14 text-lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                    ) : (
                                        <>
                                            Resend Ticket
                                            <Send className="ml-2 w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ResendTicketModal;
