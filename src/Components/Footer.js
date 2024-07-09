import React from 'react';
import './Footer.css';
import logo from '../img/apple-touch-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faTrophy, faStar, faInfoCircle, faBriefcase, faEnvelope, faUsers, faBlog, faClipboardList, faQuestionCircle, faFileAlt, faGavel, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container footer-container-md'>
        <div className='footer-1'>
          <img src={logo} alt="logo"/>
          <div>
            <div className='footer-title'>Unicollab</div>
            <div className='footer-description'>
              UniCollab is more than just a platform;<br /> it's a gateway to a world where students from different universities/colleges converge to collaborate, innovate, and <br />elevate their projects.
            </div>
          </div>
        </div>
        <div className='footer-half footer-sections'>
          <div className='footer-2'>
            <p className='footer-section-title'>Company</p>
            <ul className='footer-links'>
              <li><a href='/about'><FontAwesomeIcon icon={faInfoCircle} /> About Us</a></li>
              <li><a href='/services'><FontAwesomeIcon icon={faBriefcase} /> Services</a></li>
              <li><a href='/careers'><FontAwesomeIcon icon={faUsers} /> Careers</a></li>
              <li><a href='/contacts'><FontAwesomeIcon icon={faEnvelope} /> Contact Us</a></li>
              <li><a href='/freelancer'><FontAwesomeIcon icon={faAddressBook} /> Hire a Freelancer</a></li>
            </ul>
          </div>
          <div className='footer-2'>
            <p className='footer-section-title'>Product</p>
            <ul className='footer-links'>
              <li><a href='/blogs'><FontAwesomeIcon icon={faBlog} /> Blogs</a></li>
              <li><a href='#'><FontAwesomeIcon icon={faStar} /> Testimonials</a></li>
              <li><a href='#'><FontAwesomeIcon icon={faClipboardList} /> Portfolio</a></li>
              <li><a href='/faq'><FontAwesomeIcon icon={faQuestionCircle} /> FAQ</a></li>
              <li><a href='#'><FontAwesomeIcon icon={faStar} /> RateUs</a></li>
            </ul>
          </div>
          <div className='footer-2'>
            <p className='footer-section-title'>Legal</p>
            <ul className='footer-links'>
              <li><a href="/privacypolicy"><FontAwesomeIcon icon={faFileAlt} /> Privacy Policy</a></li>
              <li><a href="/termsandconditions"><FontAwesomeIcon icon={faGavel} /> Terms and Conditions</a></li>
              <li><a href="/licensing"><FontAwesomeIcon icon={faFileAlt} /> Licensing</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-icons footer-icons-md'>
        <a href="#" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/SUGAM-ARORA/UniCollab" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" target="_blank" rel='noreferrer'>
          <FontAwesomeIcon   icon={faTwitter} />
        </a>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom-link'>
          &copy; 2024 UniCollab. All rights reserved.
        </div>
      </div>
      <div className='scrolltop'>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <button onClick={scrollToTop} className="button btn">
            To the Top
          </button>
        </div>
      </div>

    </div>
  );
}

export default Footer;