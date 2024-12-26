require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const chat = require('./chat'); // Assuming you have a chat module

app.post('/chatbot', async (req, res) => {
  const userMessage = req.body.message;
  console.log(userMessage);
  // Check if userMessage is valid and not empty
  if (!userMessage || !userMessage.trim()) {
    return res.status(400).json({ message: 'Message must not be empty.' });
  }

  try {
    const result = await chat.sendMessage(userMessage);
    console.log("result: ", result);
    const response = await result.response;
    console.log("response: ", response);
    const text = response.text();
    console.log("response.text: ", text);

    res.json({ message: text });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
