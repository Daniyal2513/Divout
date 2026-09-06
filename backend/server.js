// const nodemailer = require('nodemailer');
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { MongoClient } = require('mongodb');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const client = new MongoClient(process.env.MONGO_URI);
// let db;

// async function connectDB() {
//     await client.connect();
//     db = client.db('divout');
//     console.log('Connected to MongoDB');
// }
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });

// // app.post('/api/contact', async (req, res) => {
// //     console.log('Request received:', req.body);
// //     try {
// //         const { name, email, subject, message } = req.body;
// //         if (!name || !email || !subject || !message) {
// //             return res.status(400).json({ error: 'All fields are required.' });
// //         }
// //         await db.collection('contacts').insertOne({ name, email, subject, message, createdAt: new Date() });
// //     } catch (err) {
// //         console.error(err);
// //         res.status(500).json({ error: 'Something went wrong.' });
// //     }
// // });
// app.post('/api/contact', async (req, res) => {
//     try {
//         const { name, email, subject, message } = req.body;
//         if (!name || !email || !subject || !message) {
//             return res.status(400).json({ error: 'All fields are required.' });
//         }

//         await db.collection('contacts').insertOne({ name, email, subject, message, createdAt: new Date() });

//         try {
//             console.log('Attempting to send email...');
//             await transporter.sendMail({
//                 from: process.env.EMAIL_USER,
//                 to: process.env.EMAIL_USER,
//                 subject: `New Inquiry: ${subject}`,
//                 text: `You got a new message from your Divout website.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
//             });
//             console.log('Email sent successfully!');
//         } catch (emailErr) {
//             console.log('========================');
//             console.log('EMAIL ERROR:', emailErr.message);
//             console.log('========================');
//         }

//         res.status(201).json({ success: true, message: 'Submission received.' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Something went wrong.' });
//     }
// });
// const PORT = process.env.PORT || 5000;

// connectDB()
//     .then(() => {
//         app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//     })
//     .catch((err) => {
//         console.error('Failed to connect to MongoDB:', err);
//     });