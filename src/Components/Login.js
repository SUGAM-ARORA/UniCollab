import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

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
const LogIn = () => {
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
    <div className="create-account-containe">
      <div className="create-account-for" style={{width:'35vw',height:'41vw'}}>
        <div className="inner-box" style={{ marginTop:'2vw',width:'31vw',height:'25vw' ,border: '1px solid #cf00a3',borderRadius:'25px',justifyContent:'center'}}>
          <h2 style={{ marginBottom:'2.5vw', fontSize: '2rem', fontWeight:'400',color: '#ffbdf1', listStyleType: 'none', padding: 0 }}>Sign in</h2>
          {formStep === 1 ? (
            <>
            <label className="emai" htmlFor="email-input" style={{ color: '#ffbdf1', fontSize: '1.2rem', listStyleType: 'none', padding: 0,marginLeft:'3vw'}}>Email or mobile phone number</label>
            <input
              className="input-fiel" 
              type="email" 
              placeholder="" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            style={{marginLeft:'3vw'}}
            />
             <label className="emai" htmlFor="Password" style={{ color: '#ffbdf1', fontSize: '1.2rem', listStyleType: 'none', padding: 0,marginLeft:'3vw' }}>Password</label>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <input
        className="input-field12"
        type={showPassword ? "text" : "password"}
        placeholder=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ flex: 1,marginLeft:'3vw'}}
      />
       <button 

        onClick={togglePasswordVisibility} 
        style={{ 
          color: '#fff',

          marginRight: '3vw',
          background: 'transparent', 
          border: 'none', 
          cursor: 'pointer' 
        }}
      >
        {showPassword ? <ViewOffIcon />: <ViewIcon />}
      </button>
    </div>

             {emailError && <p className="error-message">{emailError}</p>}
            <button className="next-bt" onClick={handleNextClick} style={{ color: '#87fc93',marginTop:'3vw' }}>Login</button>
            </>
          ) : null}
          </div>
            <div style={{marginTop:'0'}}className="separator">
                <hr />
                <span>or</span>
                <hr />
              </div>
              <div className="signup-option">
                <Link to="/createAccount" className="facebook-bt" style={{ color: '#87fc93',}}>
                 Create an Account
                </Link>

              </div>

        </div>
      </div>

  );
};

export default LogIn;