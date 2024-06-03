import React from "react";
import { NavLink } from "react-router-dom";
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
        <div className="icons">
        <a href="#" target="_blank">
          <i class="devicon-linkedin-plain"></i>
        </a>
        <a href="#" target="_blank">
          <i class="devicon-github-original"></i>
        </a>
        <a href="#" target="_blank">
          <i class="devicon-facebook-plain"></i>
        </a>
        <a href="#" target="_blank">
          <i class="devicon-twitter-original"></i>
        </a>
        </div>
        <p>&copy; 2024 UniCollab. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li id="pro">
            <NavLink to="/pricing">Go Pro!</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/porfolios">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
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
