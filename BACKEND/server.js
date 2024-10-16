const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Use CORS to allow requests from the frontend
app.use(cors());
app.use(bodyParser.json());

// Set up multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Placeholder data
let profileData = { username: "", bio: "", profilePic: "" };
let accountData = { email: "", password: "", language: "en" };

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/stopwatch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle connection errors and ensure the process exits on failure
db.on('error', (error) => {
  console.error('Connection error:', error);
  process.exit(1);  // Exit the process if there's a database connection error
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model for recording times
const recordingSchema = new mongoose.Schema({
  time: Number,
  date: { type: Date, default: Date.now },
});

const Recording = mongoose.model('Recording', recordingSchema);

// Endpoint to save recording time with error handling for missing data
app.post('/api/recordings', async (req, res) => {
  const { time } = req.body;

  if (!time) {
    return res.status(400).json({ message: 'Time value is required.' });
  }

  const newRecording = new Recording({ time });
  try {
    const savedRecording = await newRecording.save();
    res.status(201).json(savedRecording);
  } catch (error) {
    console.error('Error saving recording:', error);
    res.status(500).json({ message: 'Failed to save the recording.' });
  }
});

// Profile settings endpoint with error handling for missing data
app.get('/api/profile', (req, res) => {
  try {
    res.json(profileData);
  } catch (error) {
    console.error('Error fetching profile data:', error);
    res.status(500).json({ message: 'Failed to fetch profile data.' });
  }
});

app.put('/api/profile', (req, res) => {
  const { username, bio } = req.body;

  if (!username || !bio) {
    return res.status(400).json({ message: 'Username and bio are required.' });
  }

  try {
    profileData = req.body;
    res.json({ message: 'Profile settings updated successfully!' });
  } catch (error) {
    console.error('Error updating profile data:', error);
    res.status(500).json({ message: 'Failed to update profile settings.' });
  }
});

// Account settings endpoint with error handling for missing data
app.get('/api/account', (req, res) => {
  try {
    res.json(accountData);
  } catch (error) {
    console.error('Error fetching account data:', error);
    res.status(500).json({ message: 'Failed to fetch account data.' });
  }
});

app.put('/api/account', (req, res) => {
  const { email, password, language } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    accountData = req.body;
    res.json({ message: 'Account settings updated successfully!' });
  } catch (error) {
    console.error('Error updating account data:', error);
    res.status(500).json({ message: 'Failed to update account settings.' });
  }
});

// File upload endpoint with error handling for missing data
app.post('/send', upload.single('attachments'), (req, res) => {
  const { name, email, issue, message } = req.body;
  const attachment = req.file;

  if (!name || !email || !issue || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  if (!attachment) {
    return res.status(400).json({ success: false, message: 'Attachment is required.' });
  }

  try {
    console.log('Received:', { name, email, issue, message, attachment });
    res.json({ success: true, message: 'File and data received successfully.' });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ success: false, message: 'Failed to process the request.' });
  }
});

// Endpoint to handle feedback submission with error handling for missing data
app.post('/api/submit-feedback', (req, res) => {
  const { emoji, feedback } = req.body;

  if (!emoji || !feedback) {
    return res.status(400).json({ message: 'Emoji and feedback are required.' });
  }

  try {
    console.log(`Received feedback: Emoji: ${emoji}, Feedback: ${feedback}`);
    res.status(200).send({ message: 'Feedback received successfully!' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ message: 'Failed to submit feedback.' });
  }
});

// Add a root route to handle the root URL
app.get('/', (req, res) => {
  try {
    res.send('Welcome to the Stopwatch API!');
  } catch (error) {
    console.error('Error handling root URL request:', error);
    res.status(500).json({ message: 'Failed to load the homepage.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
