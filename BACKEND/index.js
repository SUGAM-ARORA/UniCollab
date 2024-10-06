require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// CHATBOT 
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});
const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Hello, I'm the user. Please answer my general queries related to development and open source." }],
    },
    {
      role: "model",
      parts: [{ text: "Hello, I'm your helpful Tech Assistant. How can I assist you? Some info about Unicollab: UniCollab is more than just a platform; it's a gateway to a world where students from different universities/colleges converge to collaborate, innovate, and elevate their projects. Imagine a space where ideas flow freely, where knowledge is shared effortlessly, and where learning transcends classrooms. That's UniCollab for you." }],
    },
  ],
  generationConfig: {
    maxOutputTokens: 500,
  },
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

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
