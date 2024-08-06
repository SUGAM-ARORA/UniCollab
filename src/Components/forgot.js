import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../img/homeicon.png';
import { Link } from "react-router-dom";
import './forgot.css'; // Ensure you have specific styles for this component

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="forgot-password-page">
      <Link to="/">
        <img src={homeIcon} alt="Home" className="home-icon" />
      </Link>
      <div className="forgot-password-container1">
        <h2>Forgot Password</h2>
        <form className="forgot-password-form1">
          <div className="input-group">
            <label htmlFor="email">Enter Your Email Address</label>
            <input type="email" id="email" name="email" required />
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
