import React from 'react';
import './Footer.css';
import logo from '../img/apple-touch-icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container footer-container-md'>
        <div className='footer-0'>
          <div className='footer-1'>
            <img src={logo} alt="logo"/>
            <div className='footer-title'>Unicollab</div> 
          </div>
          <div className='visitor'>
          <a><img alt="Hits" src="https://hits.sh/uni-collab.vercel.app.svg?style=for-the-badge&label=Visitors&extraCount=786&color=a00a73&labelColor=1e1a34"/></a>
          </div>
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
              <a href="/privacypolicy"><li className='footer-link'>Privacy Policy</li></a>
              <a href="/termsandconditions"><li className='footer-link'>Terms and Conditions</li></a>
              <a href="/licensing"><li className='footer-link'>Licensing</li></a>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-icons footer-icons-md'>
      <a href="#" target="_blank" rel='noreferrer'>
          <i class="devicon-linkedin-plain"></i>
        </a>
        <a href="https://github.com/SUGAM-ARORA/UniCollab" target="_blank" rel='noreferrer'>
          <i class="devicon-github-original"></i>
        </a>
        <a href="#" target="_blank" rel='noreferrer'>
          <i class="devicon-facebook-plain"></i>
        </a>
        <a href="#" target="_blank" rel='noreferrer'>
          <i class="devicon-twitter-original"></i>
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
