const asyncHandler = require("express-async-handler");
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const signup = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log('Signup request received:', req.body); // Logging request body
  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error); // Logging error
    res.status(400).json({ message: error.message });
  }
});

const loginuser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request received:', req.body); // Logging request body
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ message: 'Logged in successfully', user: { username: user.username, email: user.email } });
  } catch (error) {
    console.error('Error during login:', error); // Logging error
    res.status(400).json({ message: error.message });
  }
});

const logoutuser = asyncHandler(async (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
});

module.exports = { signup, loginuser, logoutuser };
