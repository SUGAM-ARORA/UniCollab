import React from 'react';
import './Footer.css';
import logo from '../img/apple-touch-icon.png';
import discordLogo from '../img/discord.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container footer-container-md'>
        <div className='footer-1'>
          <img src={logo} alt="logo" />
          <div className='footer-title'>Unicollab</div>
        </div>
        <div className='footer-half footer-sections'>
          <div className='footer-2'>
            <p className='footer-section-title'>Company</p>
            <ul className='footer-links'>
              <li className='footer-link'><a href='/about'>About Us</a></li>
              <li className='footer-link'>Servives</li>
              <li className='footer-link'>Careers</li>
              <li className='footer-link'>Contact Us</li>
            </ul>
          </div>
          <div className='footer-2'>
            <p className='footer-section-title'>Product</p>
            <ul className='footer-links'>
              <li className='footer-link'>Blogs</li>
              <li className='footer-link'>Testimonals</li>
              <li className='footer-link'>Portfolio</li>
              <li className='footer-link'>FAQ</li>
            </ul>
          </div>
          <div className='footer-2'>
            <p className='footer-section-title'>Legal</p>
            <ul className='footer-links'>
              <li className='footer-link'>Privacy Policy</li>
              <li className='footer-link'>Terms and Conditions</li>
              <li className='footer-link'>Licensing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-icons footer-icons-md'>
        <a href="https://linkedin.com" target="_blank" rel='noreferrer'>
          <i className="devicon-linkedin-plain linkedin"></i>
        </a>
        <a href="https://github.com/SUGAM-ARORA/UniCollab" target="_blank" rel='noreferrer'>
          <i className="devicon-github-original github"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel='noreferrer'>
          <i className="devicon-facebook-plain facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel='noreferrer'>
          <i className="devicon-twitter-original twitter"></i>
        </a>
        <a href="https://discord.com" target="_blank" rel='noreferrer'>
          <img src={discordLogo} alt="Discord" className="discord" />
        </a>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom-link'>
          &copy; 2024 UniCollab. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;