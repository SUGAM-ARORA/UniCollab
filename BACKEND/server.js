const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');

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

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
