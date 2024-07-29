const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle form submission
app.post('/send-feedback', async (req, res) => {
  const { name, email, rating, issue, comments } = req.body;

  // Configure the email transport using the default SMTP transport and a Gmail account
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  // Set up email data
  const mailOptions = {
    from: email,
    to: 'sugam.arora23@gmail.com',
    subject: 'New Feedback Received',
    text: `Name: ${name}\nEmail: ${email}\nRating: ${rating}\nIssue Type: ${issue}\nComments: ${comments}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Feedback sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending feedback.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
