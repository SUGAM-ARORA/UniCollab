const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // For sending emails
const cors = require('cors'); // Import CORS package
const app = express();

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post('/api/reset-password', async (req, res) => {
  const { email } = req.body;

  // Add your logic to handle the password reset, e.g., send a reset link via email
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Password Reset',
    text: 'Click the link to reset your password: <reset link>'
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Password reset email sent.' });
  } catch (error) {
    console.error('Error sending email:', error); // Log the detailed error
    res.status(500).json({ message: 'Error sending email.' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
