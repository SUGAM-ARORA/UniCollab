import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logImg from './Profile/log.svg';
import registerImg from './Profile/register.svg';
import homeIcon from './FreeLancer/homeicon.png';
import { auth, googleProvider, githubProvider } from './Firebase/Firebase.js';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [showPhoneAuth, setShowPhoneAuth] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      localStorage.setItem('user', JSON.stringify(user));
      console.log('Google sign-in success:', user);
      navigate('/');
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      localStorage.setItem('user', JSON.stringify(user));
      console.log('GitHub sign-in success:', user);
      navigate('/');
    } catch (error) {
      console.error('GitHub sign-in error:', error);
    }
  };

  const handleLogin = async (e) => {
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
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log('Login successful:', user);
        localStorage.setItem('user', JSON.stringify(user));

        displayAlert('Logged in');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } catch (error) {
        displayAlert('An error occurred during login');
        console.error('Error:', error.message);
      }
    }
  };

  const handleSignUp = async (e) => {
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
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log('Signup successful:', user);
        displayAlert('Signed up. Now login');
      } catch (error) {
        displayAlert('An error occurred during signup');
        console.error('Error:', error.message);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleSignUpMode = () => {
    setIsSignUpMode(!isSignUpMode);
    clearErrors();
  };

  const togglePhoneAuth = () => {
    setShowPhoneAuth(!showPhoneAuth);
  };

  const displayAlert = (message) => {
    alert(message);
  };

  const clearErrors = () => {
    setEmail('');
    setPassword('');
    setUsername('');
  };

  const handlePhoneSignIn = async () => {
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          'recaptcha-container',
          {
            size: 'invisible',
            callback: (response) => {
              console.log('Recaptcha verified');
            },
          },
          auth
        );
      }

      const appVerifier = window.recaptchaVerifier;

      if (!phoneNumber.startsWith('+')) {
        displayAlert('Please include country code in phone number.');
        return;
      }

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      setVerificationId(confirmationResult);
      console.log('SMS sent.');
      displayAlert('OTP sent. Please check your phone.');
    } catch (error) {
      console.error('Error during phone sign-in:', error);
      displayAlert('Failed to send OTP. Please try again.');
    }
  };

  const verifyOtp = async () => {
    try {
      if (verificationId) {
        const result = await verificationId.confirm(otp);
        const user = result.user;
        localStorage.setItem('user', JSON.stringify(user));
        console.log('Phone sign-in success:', user);
        displayAlert('Phone verification successful!');
        navigate('/');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      displayAlert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className={`container1 ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleLogin}>
            <Link to="/" className="home-link">
              <img src={homeIcon} alt="Home" className="home-icon" />
            </Link>
            <h2 className="title">Step into UniCollab! Log In</h2>

            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                className="input"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </button>
            </div>
            <input type="submit" value="Login" className="btn1 solid" />
            <p className="social-text">Connect with Social Magic</p>
            <div className="social-media">
              <Link to="https://www.facebook.com" className="social-icon">
                <i className="fab fa-facebook-f" style={{ color: 'darkturquoise' }}></i>
              </Link>
              <Link to="https://www.twitter.com" className="social-icon">
                <i className="fab fa-twitter" style={{ color: 'darkturquoise' }}></i>
              </Link>
              <div onClick={handleGoogleSignIn} className="social-icon">
                <i className="fab fa-google" style={{ color: 'darkturquoise' }}></i>
              </div>
              <Link to="https://www.linkedin.com" className="social-icon">
                <i className="fab fa-linkedin-in" style={{ color: 'darkturquoise' }}></i>
              </Link>
              <div onClick={handleGitHubSignIn} className="social-icon">
                <i className="fab fa-github" style={{ color: 'darkturquoise' }}></i>
              </div>
              <div onClick={togglePhoneAuth} className="social-icon">
                <i className="fas fa-phone" style={{ color: 'darkturquoise' }}></i>
              </div>
            </div>

            {showPhoneAuth && (
              <div className="phone-auth-section">
                <div className="input-field">
                  <i className="fas fa-phone"></i>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <button type="button" className="btn1 solid" onClick={handlePhoneSignIn}>
                  Send OTP
                </button>
                <div className="input-field">
                  <i className="fas fa-key"></i>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <button type="button" className="btn1 solid" onClick={verifyOtp}>
                  Verify OTP
                </button>
                <div id="recaptcha-container"></div>
              </div>
            )}
          </form>

          <form className="sign-up-form" onSubmit={handleSignUp}>
            <Link to="/" className="home-link">
              <img src={homeIcon} alt="Home" className="home-icon" />
            </Link>
            <h2 className="title">Sign Up for UniCollab</h2>

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
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </button>
            </div>
            <input type="submit" className="btn1" value="Sign Up" />
            <p className="social-text">Connect with Social Magic</p>
            <div className="social-media">
              <Link to="https://www.facebook.com" className="social-icon">
                <i className="fab fa-facebook-f" style={{ color: 'darkturquoise' }}></i>
              </Link>
              <Link to="https://www.twitter.com" className="social-icon">
                <i className="fab fa-twitter" style={{ color: 'darkturquoise' }}></i>
              </Link>
              <div onClick={handleGoogleSignIn} className="social-icon">
                <i className="fab fa-google" style={{ color: 'darkturquoise' }}></i>
              </div>
              <Link to="https://www.linkedin.com" className="social-icon">
                <i className="fab fa-linkedin-in" style={{ color: 'darkturquoise' }}></i>
              </Link>
              <div onClick={handleGitHubSignIn} className="social-icon">
                <i className="fab fa-github" style={{ color: 'darkturquoise' }}></i>
              </div>
              <div onClick={togglePhoneAuth} className="social-icon">
                <i className="fas fa-phone" style={{ color: 'darkturquoise' }}></i>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New to UniCollab?</h3>
            <p>
              Join us today and start collaborating with students from
              universities worldwide!
            </p>
            <button className="btn1 transparent" onClick={toggleSignUpMode}>
              Sign Up
            </button>
          </div>
          <img src={logImg} className="image" alt="Log In" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of Us?</h3>
            <p>
              Log in to access your account and continue collaborating and
              innovating.
            </p>
            <button className="btn1 transparent" onClick={toggleSignUpMode}>
              Log In
            </button>
          </div>
          <img src={registerImg} className="image" alt="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
