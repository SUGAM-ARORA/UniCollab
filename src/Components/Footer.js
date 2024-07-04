import React from 'react';
import './Footer.css';
import logo from '../img/apple-touch-icon.png';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container footer-container-md'>
        <div className='footer-1'>
          <img src={logo} alt="logo"/>
          <div className='footer-title'>Unicollab</div>
        </div>
        <div className='footer-half footer-sections'>
          <div className='footer-2'>
            <p className='footer-section-title'>Company</p>
            <ul className='footer-links'>
              <li><a href='/about'>About Us</a></li>
              <li><a href='/services'>Services</a></li>
              <li><a href='/careers'>Careers</a></li>
              <li><a href='/contacts'>Contact Us</a></li>
              <li><a href='/freelancer'>Hire a Freelancer</a></li>
            </ul>
          </div>
          <div className='footer-2'>
            <p className='footer-section-title'>Product</p>
            <ul className='footer-links'>
              <li><a href='/blogs'>Blogs</a></li>
              <li><a href='#'>Testimonials</a></li>
              <li><a href='#'>Portfolio</a></li>
              <li><a href='/faq'>FAQ</a></li>
            </ul>
          </div>
          <div className='footer-2'>
            <p className='footer-section-title'>Legal</p>
            <ul className='footer-links'>
              <li><a href="/privacypolicy">Privacy Policy</a></li>
              <li><a href="/termsandconditions">Terms and Conditions</a></li>
              <li><a href="/licensing">Licensing</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-icons footer-icons-md'>
        <a href="#" target="_blank" rel='noreferrer'>
          <i className="devicon-linkedin-plain"></i>
        </a>
        <a href="https://github.com/SUGAM-ARORA/UniCollab" target="_blank" rel='noreferrer'>
          <i className="devicon-github-original"></i>
        </a>
        <a href="#" target="_blank" rel='noreferrer'>
          <i className="devicon-facebook-plain"></i>
        </a>
        <a href="#" target="_blank" rel='noreferrer'>
          <i className="devicon-twitter-original"></i>
        </a>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom-link'>
          &copy; 2024 UniCollab. All rights reserved.
        </div>
      </div>
      <div className='scrolltop'>
      <div style={{ textAlign: 'center', padding: '20px'  }}>
        <button onClick={scrollToTop} className="button btn">
          To the Top
        </button>
      </div>
    </div>
    </div>
  );
}

export default Footer;

