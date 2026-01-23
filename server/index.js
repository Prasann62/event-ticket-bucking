const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
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
            console.error('Error inserting booking:', err);
            return res.status(500).json({ error: 'Database insertion failed' });
        }

        // Send confirmation email (simplified)
        sendEmail(email, name, event, noft);

        res.status(200).json({ message: 'Booking confirmed successfully', bookingId: result.insertId });
    });
});

async function sendEmail(to, name, event, noft) {
    // This is a placeholder. For real emails, configure a transport like Gmail or SendGrid.
    console.log(`Sending confirmation email to ${to} for event: ${event}`);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
