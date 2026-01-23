import React, { useState } from 'react';
import Swal from 'sweetalert2';

const BookingModal = ({ isOpen, onClose, eventName }) => {
    const [formData, setFormData] = useState({
        nm: '',
        em: '',
        pho: '',
        noft: 1
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#dc143c',
                    background: '#0a0a0a',
                    color: '#ffffff'
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
                confirmButtonColor: '#dc143c',
                background: '#0a0a0a',
                color: '#ffffff'
            });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content-react" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h5 className="modal-title">Book Your Ticket</h5>
                    <button type="button" className="btn-close-white" onClick={onClose}>&times;</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <div className="mb-4">
                            <label className="form-label">Event</label>
                            <input type="text" className="form-control" value={eventName} readOnly />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Your Name</label>
                            <input type="text" name="nm" className="form-control" placeholder="Enter name" required value={formData.nm} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Email</label>
                            <input type="email" name="em" className="form-control" placeholder="Enter email" required value={formData.em} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Phone</label>
                            <input type="number" name="pho" className="form-control" placeholder="Enter phone" required value={formData.pho} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Tickets</label>
                            <input type="number" name="noft" className="form-control" min="1" required value={formData.noft} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn-primary w-100">Confirm Booking</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
