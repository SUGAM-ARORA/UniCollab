import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import homeIcon from '../img/homeicon.png';
import { Link } from "react-router-dom";
import './forgot.css'; // Ensure you have specific styles for this component

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/reset-password', { email }); // Replace with your backend endpoint
      setMessage(response.data.message); // Handle the response message
    } catch (error) {
      setMessage('An error occurred. Please try again.'); // Handle the error
    }
  };

  return (
    <div className="forgot-password-page">
      <Link to="/">
        <img src={homeIcon} alt="Home" className="home-icon" />
      </Link>
      <div className="forgot-password-container1">
        <h2>Forgot Password</h2>
        {message && <p className="message">{message}</p>}
        <form className="forgot-password-form1" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Enter Your Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="reset-button">Reset Password</button>
          <br></br>
          <button type="button" className="back-to-login-button" onClick={handleBackToLogin}>
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
