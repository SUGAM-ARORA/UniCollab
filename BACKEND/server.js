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
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model for recording times
const recordingSchema = new mongoose.Schema({
  time: Number,
  date: { type: Date, default: Date.now },
});

const Recording = mongoose.model('Recording', recordingSchema);

// Endpoint to save recording time
app.post('/api/recordings', async (req, res) => {
  const { time } = req.body;

  const newRecording = new Recording({ time });
  try {
    const savedRecording = await newRecording.save();
    res.status(201).json(savedRecording);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Profile settings endpoint
app.get('/api/profile', (req, res) => {
  res.json(profileData);
});

app.put('/api/profile', (req, res) => {
  profileData = req.body;
  res.json({ message: 'Profile settings updated successfully!' });
});

// Account settings endpoint
app.get('/api/account', (req, res) => {
  res.json(accountData);
});

app.put('/api/account', (req, res) => {
  accountData = req.body;
  res.json({ message: 'Account settings updated successfully!' });
});

// Endpoint to handle file uploads
app.post('/send', upload.single('attachments'), (req, res) => {
  const { name, email, issue, message } = req.body;
  const attachment = req.file;

  console.log('Received:', { name, email, issue, message, attachment });

  // Simulate processing the data
  if (name && email && issue && message) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Endpoint to handle feedback submission
app.post('/api/submit-feedback', (req, res) => {
  const { emoji, feedback } = req.body;

  // Here you would typically save the feedback to a database
  // For now, we'll just log it to the console
  console.log(`Received feedback: Emoji: ${emoji}, Feedback: ${feedback}`);

  // Send a success response
  res.status(200).send({ message: 'Feedback received successfully!' });
});

// Add a root route to handle the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Stopwatch API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
