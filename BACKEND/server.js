const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = 3000;

// Use CORS to allow requests from the frontend
app.use(cors());

// Set up multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
