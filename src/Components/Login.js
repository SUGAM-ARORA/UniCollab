import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logImg from './Profile/log.svg';
import registerImg from './Profile/register.svg';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleNextClick = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let valid = true;

    if (!emailPattern.test(email)) {
      displayAlert('* Please enter a valid email address.');
      valid = false;
    }

    if (password.length < 6) {
      displayAlert('* Password must be at least 6 characters.');
      valid = false;
    }

    if (valid) {
      // Handle login action, e.g., call API or set login state
      console.log('Logging in...');
    }
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let valid = true;

    if (!username) {
      displayAlert('* Username is required.');
      valid = false;
    }

    if (!emailPattern.test(email)) {
      displayAlert('* Please enter a valid email address.');
      valid = false;
    }

    if (password.length < 6) {
      displayAlert('* Password must be at least 6 characters.');
      valid = false;
    }

    if (valid) {
      // Handle sign up action, e.g., call API to register user
      console.log('Signing up...');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleSignUpMode = () => {
    setIsSignUpMode(!isSignUpMode);
    clearErrors();
  };

  const displayAlert = (message) => {
    alert(message);
  };

  const clearErrors = () => {
    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <div className={`container1 ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleNextClick} action="/https://uni-collab.vercel.app/" method="post">
            <h2 className="title">Step into UniCollab! Log In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
              </button>
            </div>
            <p><Link to="/verifyEmail" className='reset-link'>Forgot password?</Link></p>
            <input type="submit" value="Login" className="btn1 solid" />
            <p className="social-text">Connect with Social Magic</p>
            <div className="social-media">
              <Link to="https://www.facebook.com" className="social-icon">
                <i className="fab fa-facebook-f" style={{ color: 'darkturquoise' }}></i>
              </Link>
              <Link to="https://www.twitter.com" className="social-icon">
                <i className="fab fa-twitter" style={{ color: 'darkturquoise' }}></i>
              </Link>
              <Link to="https://www.gmail.com" className="social-icon">
                <i className="fab fa-google" style={{ color: 'darkturquoise' }}></i>
              </Link>
              <Link to="https://www.linkedin.com" className="social-icon">
                <i className="fab fa-linkedin-in" style={{ color: 'darkturquoise' }}></i>
              </Link>
            </div>
          </form>

          <form className="sign-up-form" onSubmit={handleSignUpClick} action="/https://uni-collab.vercel.app/" method="post">
            <h2 className="title">Start Journey with UniCollab</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
              </button>
            </div>
            <input type="submit" value="Sign Up" className="btn1 solid" />
            <p className="social-text">Connect with Social Magic</p>
            <div className="social-media">
              <Link to="https://www.facebook.com" className="social-icon">
                <i className="fab fa-facebook-f" style={{ color: 'darkturquoise' }}></i>
              </Link>
              <Link to="https://www.twitter.com" className="social-icon">
                <i className="fab fa-twitter" style={{ color: 'darkturquoise' }}></i>
              </Link>
              <Link to="https://www.gmail.com" className="social-icon">
                <i className="fab fa-google" style={{ color: 'darkturquoise' }}></i>
              </Link>
              <Link to="https://www.linkedin.com" className="social-icon">
                <i className="fab fa-linkedin-in" style={{ color: 'darkturquoise' }}></i>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Be Part of UniCollab</h3>
            <p>
              Explore our platform and unlock a realm of personalized experiences.
            </p>
            <br />
            <button className="btn transparent" onClick={toggleSignUpMode} style={{ display: 'block', margin: 'auto' }}>
              Become a Member
            </button>
          </div>
          <img src={logImg} className="image" alt="Login illustration" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Adventure Awaits!</h3>
            <p>
              Embark on a journey through UniCollab for personalized experiences.
            </p>
            <br />
            <button className="btn transparent" onClick={toggleSignUpMode} style={{ display: 'block', margin: 'auto' }}>
              ENTER YOUR REALM
            </button>
          </div>
          <img src={registerImg} className="image" alt="Register illustration" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
