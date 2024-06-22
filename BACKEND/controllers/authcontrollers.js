const asyncHandler = require("express-async-handler");
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const signup = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
      try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).send('User created successfully');
      } catch (error) {
        res.status(400).send(error);
      }
  });

  const  loginuser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).send('Invalid email or password');
    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).send('Invalid email or password');
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.send('Logged in successfully');
  } catch (error) {
    res.status(400).send(error);
  }
  });
 
  const  logoutuser = asyncHandler(async (req, res) => {
      res.clearCookie('token');
      res.send('Logged out successfully');
  });

module.exports = {signup,loginuser,logoutuser};