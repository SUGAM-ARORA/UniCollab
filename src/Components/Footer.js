import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <a href="#" className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </a>
      </div>
    </div>
  );
};

export default Footer;
