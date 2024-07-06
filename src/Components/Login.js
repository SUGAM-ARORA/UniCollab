import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logImg from './Profile/log.svg';
import registerImg from './Profile/register.svg';
import homeIcon from './FreeLancer/homeicon.png'

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const navigate = useNavigate();

  const handleNextClick = async (e) => {
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
        const response = await fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.status === 200) {
          console.log('Login successful', data);
          displayAlert('Logged in');

          // Store the username and email in local storage
          localStorage.setItem('username', data.user.username);
          localStorage.setItem('email', data.user.email);

          setTimeout(() => {
            navigate('/');
          }, 1000);

          // Handle successful login
        } else {
          displayAlert(data.message || 'Login failed');
        }
      } catch (error) {
        displayAlert('An error occurred during login');
        console.error('Error:', error);
      }
    }
  };

  const handleSignUpClick = async (e) => {
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
        const response = await fetch('http://localhost:5000/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Signup successful', data);
          displayAlert('Signed up. Now login');
          // Handle successful signup
        } else {
          displayAlert(data.message || 'Signup failed');
        }
      } catch (error) {
        displayAlert('An error occurred during signup');
        console.error('Error:', error);
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
      {/* Home Link */}
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleNextClick}>
          <Link to="/" className="home-link">
                <img src={homeIcon} alt="Home" className="home-icon" />
            </Link>
            <h2 className="title">Step into UniCollab! Log In</h2>
            
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                className='input'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                className='input'
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
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
              <Link to="https://www.gmail.com" className="social-icon">
                <i className="fab fa-google" style={{ color: 'darkturquoise' }}></i>
              </Link>
              <Link to="https://www.linkedin.com" className="social-icon">
                <i className="fab fa-linkedin-in" style={{ color: 'darkturquoise' }}></i>
              </Link>
            </div>
          </form>

          <form className="sign-up-form" onSubmit={handleSignUpClick}>
            
            <h2 className="title">Start Journey with UniCollab</h2>
            <Link to="/" className="home-link">
                <img src={homeIcon} alt="Home" className="home-icon" />
            </Link>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                className='input'
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
                className='input'
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
            <button className="btn transparent" onClick={toggleSignUpMode} style={{ display: 'block', margin: '0 auto' }}>
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
            <button className="btn transparent" onClick={toggleSignUpMode} style={{ display: 'block', margin: '0 auto' }}>
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
