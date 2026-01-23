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
        // Send confirmation email (simplified)
        sendEmail(email, name, event, noft);

        res.status(200).json({ message: 'Booking confirmed successfully', bookingId: result.insertId });
    });
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendEmail(to, name, event, noft) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: `Your Ticket for ${event} - Booking Confirmed!`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b0f19; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 0 auto; background-color: #1a1f2e; border-radius: 20px; overflow: hidden; box-shadow: 0 0 50px rgba(139, 92, 246, 0.2); }
                    .header { background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); padding: 40px 20px; text-align: center; }
                    .header h1 { color: white; margin: 0; font-size: 28px; text-transform: uppercase; letter-spacing: 2px; }
                    .content { padding: 40px 30px; color: #e2e8f0; }
                    .ticket-info { background-color: #2d3748; padding: 25px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); margin: 20px 0; }
                    .label { color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
                    .value { color: white; font-size: 18px; font-weight: 600; margin-bottom: 20px; }
                    .footer { text-align: center; padding: 30px; color: #64748b; font-size: 14px; border-top: 1px solid rgba(255,255,255,0.05); }
                    .qr-placeholder { text-align: center; margin-top: 20px; padding: 20px; background: white; border-radius: 10px; width: 150px; height: 150px; margin: 20px auto; display: flex; align-items: center; justify-content: center; color: black; font-weight: bold; }
                    .button { display: inline-block; background: #8b5cf6; color: white; padding: 15px 30px; text-decoration: none; border-radius: 50px; font-weight: bold; margin-top: 20px; }
                </style>
            </head>
            <body>
                <br><br>
                <div class="container">
                    <div class="header">
                        <h1>Booking Confirmed</h1>
                    </div>
                    <div class="content">
                        <p style="font-size: 16px;">Hello <strong>${name}</strong>,</p>
                        <p style="color: #cbd5e1;">Your booking has been successfully confirmed. Here is your e-ticket.</p>
                        
                        <div class="ticket-info">
                            <div class="label">Event</div>
                            <div class="value">${event}</div>
                            
                            <div class="label">Number of Tickets</div>
                            <div class="value">${noft} Person(s)</div>
                            
                            <div class="label">Booking Details</div>
                            <div class="value">${to}</div>
                        </div>

                        <div style="text-align: center;">
                            <div class="qr-placeholder">
                                [QR CODE]
                            </div>
                            <p style="font-size: 12px; color: #94a3b8;">Present this QR code at the entrance</p>
                        </div>
                    </div>
                    <div class="footer">
                        <p>&copy; 2025 Eventify. All rights reserved.</p>
                        <p>Need help? Contact support@eventify.com</p>
                    </div>
                </div>
                <br><br>
            </body>
            </html>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`SUCCESS: Email sent to ${to}`);
    } catch (error) {
        console.error('ERROR: Failed to send email:', error);
    }
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
