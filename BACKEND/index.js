require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');

app.use('/auth', authRoutes);

app.get('/protected', authMiddleware, (req, res) => {
  res.send(`Hello ${req.user.username}, this is a protected route.`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
