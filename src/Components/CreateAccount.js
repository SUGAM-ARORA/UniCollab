import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "./CreateAccount.css"
const ViewOffIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"} {...props}>
    <path d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 13.5L16.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 11L22 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 13L4 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 13.5L7.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ViewIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"} {...props}>
    <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
const CreateAccount = () => {
  const [email, setEmail] = useState('')
  ;
  const [emailError, setEmailError] = useState('');
  const [formStep, setFormStep] = useState(1);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleNextClick = () => {
    if (formStep === 1) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (!emailPattern.test(email)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
        setFormStep(2);
      }
    } else if (formStep === 2) {
      // Add your validation for the three inputs here
      setFormStep(3);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (

    <div className="create-account-container">
      <div className="create-account-form">
        <h1>Create an account</h1>
        <p>Already have an account? <Link to = "/login"> <span> Log In </span></Link></p>
        <br/>
        <div className="form-steps flex-container">
          <div className={`step ${formStep === 1 ? 'active step-1' : 'step-2'}`} data-step="1">
            <span>Enter your email address</span>
          </div>
          <div className={`step ${formStep === 2 ? 'active step-2' : 'step-3'}`} data-step="2">
            <span>Provide your basic info</span>
          </div>
          <div className={`step ${formStep === 3 ? 'active step-3' : ''}`} data-step="3">
            <span>Create your password</span>
          </div>
        </div>
        {formStep === 1 ? (
          <>
            <label className="email" htmlFor="email-input">Your inbox awaits!</label>
            <input
              className="input-field" 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
            <button className="next-btn" onClick={handleNextClick}>Next</button>
            <div className="separator">
              </div>
              <div className="signup-options">
                <button className="facebook-btn">
                  <i className="fab fa-github"></i> Sign up with Github
                </button>
                <button className="google-btn">
                  <i className="fab fa-google"></i> Sign up with Google
                </button>
              </div>
          </>
        ) : null}
        {formStep === 2 ? (
          <>
            <label className="email" htmlFor="first-name-input">First Name</label>
            <input className="input-field" type="text" placeholder="Enter your first name" required />

            <label className="email" htmlFor="last-name-input">Last Name</label>
            <input className="input-field" type="text" placeholder="Enter your last name" required />

            <label className="email" htmlFor="username-input">Username</label>
            <input className="input-field" type="text" placeholder="Enter your username" required />

            <button className="next-btn" onClick={handleNextClick}>Next</button>
          </>
        ) : null}
{formStep === 3 ? (
  <>
    <label className="email" htmlFor="Password">Password</label>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <input
        className="input-field1"
        type={showPassword ? "text" : "password"}
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ flex: 1}}
      />
      <button 

        onClick={togglePasswordVisibility} 
        style={{ 
          color: '#fff',
          marginBottom: '3vw', 
          marginRight: '8vw',
          background: 'transparent', 
          border: 'none', 
          cursor: 'pointer' 
        }}
      >
        {showPassword ? <ViewOffIcon />: <ViewIcon />}
      </button>
    </div>
    <p style={{ color: '#ffbdf1', fontSize: '1.2rem', fontFamily: 'Poppinslight', listStyleType: 'none', padding: 0 }}>
      • Use 8 or more characters
      • One Uppercase character
      • One lowercase character<br/>
      • One special character
      • One number
    </p>
    <button className="next-btn" onClick={handleNextClick}  style={{ color: formStep === 3 ? '#87fc93' : 'defaultColor' }}>Create an Account</button>
  </>
) : null}

      </div>
    </div>
  );
};

export default CreateAccount;