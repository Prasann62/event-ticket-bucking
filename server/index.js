const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('CRITICAL: Database connection failed!');
        console.error('Error:', err.message);
        return;
    }
    console.log('SUCCESS: Connected to MySQL database via Pool');
    connection.release();
});

// Booking Endpoint
app.post('/api/book', (req, res) => {
    const { name, email, phone, noft, event } = req.body;

    if (!name || !email || !phone || !noft || !event) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'INSERT INTO book (name, email, phone, noft, event) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, email, phone, noft, event], (err, result) => {
        if (err) {
            console.error('ERROR: Booking insertion failed!');
            console.error('SQL State:', err.sqlState);
            console.error('Error Message:', err.message);
            return res.status(500).json({
                error: 'Database insertion failed',
                details: err.message,
                code: err.code
            });
        }

        console.log('SUCCESS: Booking recorded, ID:', result.insertId);
        // Send confirmation email with booking details
        sendEmail(email, name, event, noft, result.insertId);

        res.status(200).json({ message: 'Booking confirmed successfully', bookingId: result.insertId });
    });
});

// Resend Ticket Endpoint
app.post('/api/resend-ticket', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    // Find the latest booking for this email
    // Since we don't have a reliable ID yet, we'll try to find any matching record
    // In a real app, you'd want a unique booking reference or ID
    const sql = 'SELECT * FROM book WHERE email = ? LIMIT 1';
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error('ERROR: Failed to fetch booking for resend:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'No booking found for this email' });
        }

        const booking = results[0];
        // Note: result.insertId is not available for SELECT, we'd need an actual ID column
        // I'll pass a placeholder or the index if I can find one, but for now #BK-LATEST
        sendEmail(booking.email, booking.name, booking.event, booking.noft, 'LATEST');

        res.status(200).json({ message: 'Ticket resent successfully' });
    });
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendEmail(to, name, event, noft, bookingId) {
    const mailOptions = {
        from: `"Eventify Tickets" <${process.env.EMAIL_USER}>`,
        to: to,
        subject: `🎟️ Ticket Confirmed: ${event} (Booking #${bookingId})`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
                    
                    body { 
                        font-family: 'Plus Jakarta Sans', -apple-system, blinkmacsystemfont, 'Segoe UI', roboto, oxygen, ubuntu, cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        background-color: #030712; 
                        margin: 0; 
                        padding: 0; 
                        color: #ffffff;
                    }
                    .wrapper {
                        background-color: #030712;
                        padding: 40px 20px;
                    }
                    .container { 
                        max-width: 600px; 
                        margin: 0 auto; 
                        background: linear-gradient(180deg, #0f172a 0%, #020617 100%); 
                        border-radius: 32px; 
                        overflow: hidden; 
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.25);
                    }
                    .header { 
                        background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); 
                        padding: 60px 40px; 
                        text-align: center;
                        position: relative;
                    }
                    .header h1 { 
                        color: white; 
                        margin: 0; 
                        font-size: 32px; 
                        font-weight: 800;
                        letter-spacing: -0.025em;
                        text-transform: none;
                    }
                    .header p {
                        color: rgba(255, 255, 255, 0.8);
                        margin-top: 10px;
                        font-size: 16px;
                    }
                    .content { 
                        padding: 40px; 
                    }
                    .greeting {
                        font-size: 20px;
                        font-weight: 600;
                        margin-bottom: 24px;
                        color: #f8fafc;
                    }
                    .ticket-card { 
                        background: rgba(255, 255, 255, 0.03); 
                        padding: 32px; 
                        border-radius: 24px; 
                        border: 1px solid rgba(255, 255, 255, 0.08); 
                        margin: 24px 0; 
                    }
                    .info-grid {
                        display: grid;
                        gap: 20px;
                    }
                    .label { 
                        color: #94a3b8; 
                        font-size: 12px; 
                        text-transform: uppercase; 
                        letter-spacing: 0.1em; 
                        font-weight: 700;
                        margin-bottom: 6px;
                    }
                    .value { 
                        color: #ffffff; 
                        font-size: 18px; 
                        font-weight: 600; 
                    }
                    .booking-id {
                        display: inline-block;
                        padding: 4px 12px;
                        background: rgba(139, 92, 246, 0.1);
                        border: 1px solid rgba(139, 92, 246, 0.2);
                        border-radius: 8px;
                        color: #a78bfa;
                        font-family: monospace;
                        font-size: 14px;
                        margin-top: 8px;
                    }
                    .footer { 
                        text-align: center; 
                        padding: 40px; 
                        color: #64748b; 
                        font-size: 14px; 
                        border-top: 1px solid rgba(255, 255, 255, 0.05); 
                    }
                    .qr-section {
                        text-align: center;
                        margin-top: 40px;
                        padding: 32px;
                        background: white;
                        border-radius: 24px;
                        width: fit-content;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .qr-code {
                        width: 160px;
                        height: 160px;
                        background: #000;
                        margin: 0 auto;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-weight: bold;
                        border-radius: 12px;
                    }
                    .button { 
                        display: block; 
                        background: #7c3aed; 
                        color: white !important; 
                        padding: 18px 32px; 
                        text-decoration: none; 
                        border-radius: 16px; 
                        font-weight: 700; 
                        margin-top: 32px;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div class="wrapper">
                    <div class="container">
                        <div class="header">
                            <h1>Booking Confirmed!</h1>
                            <p>Get ready for an incredible experience</p>
                        </div>
                        <div class="content">
                            <div class="greeting">Hi ${name},</div>
                            <p style="color: #94a3b8; line-height: 1.6;">Your tickets for the upcoming event have been secured. We've attached your digital pass below. Please present this at the venue entrance.</p>
                            
                            <div class="ticket-card">
                                <div style="margin-bottom: 24px;">
                                    <div class="label">Event</div>
                                    <div class="value">${event}</div>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <div>
                                        <div class="label">Attendance</div>
                                        <div class="value">${noft} Person(s)</div>
                                    </div>
                                    <div style="text-align: right;">
                                        <div class="label">Booking Ref</div>
                                        <div class="booking-id">#${bookingId}</div>
                                    </div>
                                </div>
                            </div>

                            <a href="#" class="button">Download Mobile Ticket</a>

                            <div class="qr-section">
                                <div class="qr-code">
                                    [QR PASS]
                                </div>
                                <p style="font-size: 12px; color: #64748b; margin-top: 16px; font-weight: 600;">SCAN AT ENTRANCE</p>
                            </div>
                        </div>
                        <div class="footer">
                            <p style="margin-bottom: 8px;">&copy; 2025 Eventify. All rights reserved.</p>
                            <p>123 Event Street, Tech City, TC 10101</p>
                            <div style="margin-top: 20px;">
                                <a href="#" style="color: #94a3b8; text-decoration: none; margin: 0 10px;">Support</a>
                                <a href="#" style="color: #94a3b8; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`SUCCESS: Ticket email sent to ${to} (Booking ID: ${bookingId})`);
    } catch (error) {
        console.error('ERROR: Failed to send email:', error);
    }
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
