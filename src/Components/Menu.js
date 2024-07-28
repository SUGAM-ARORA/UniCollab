import React, { useEffect, useState } from "react";
import "./Menu.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import Stopwatch from "./Stopwatch"; // Import the Stopwatch component


import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
  FaList,
} from "react-icons/fa";

function Menu() {
  let toggle = false;

  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);


  const [isMobile, setIsMobile] = useState(window.innerWidth < 524);
  const [showSignOutPopup, setShowSignOutPopup] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const showDropDown = () => {
    if (!toggle) {
      document.getElementById("mainMenu").style.display = "flex";
      document.getElementById("lastMenu").style.display = "flex";
      toggle = true;
    } else {
      document.getElementById("mainMenu").style.display = "none";
      document.getElementById("lastMenu").style.display = "none";
      toggle = false;
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 524);
  const [showStopwatch, setShowStopwatch] = useState(false); // State to handle stopwatch visibility


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 524);
    };


    window.addEventListener('resize', handleResize);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const showDropDown = () => {
    if (!toggle) {
      document.getElementById("mainMenu").style.display = "flex";
      document.getElementById("lastMenu").style.display = "flex";
      toggle = true;
    } else {
      document.getElementById("mainMenu").style.display = "none";
      document.getElementById("lastMenu").style.display = "none";
      toggle = false;
    }
  };

  const handleSignOut = () => {
    // Simulate sign-out logic here (e.g., clearing tokens, redirecting to login)
    console.log("User signed out");
    setShowSignOutPopup(false);
    setShowSuccessMessage(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div>
      <menu className="fromLeft">
        <Link to='/'>
          <img
            src={logo}
            alt='icon'
            className="logo"
            id='logo'
            onClick={isMobile ? showDropDown : null}
            style={{ cursor: isMobile ? 'pointer' : 'default' }}

  const toggleStopwatch = () => {
    setShowStopwatch(!showStopwatch);
  };

  return (
    <>
      <menu className="fromLeft">
        <Link to="/">
          <img
            src={logo}
            alt="icon"
            className="logo"
            id="logo"
            onClick={isMobile ? showDropDown : null}
            style={{ cursor: isMobile ? "pointer" : "default" }}

          />
        </Link>

        <ul className="fromTop" id="mainMenu">
<Icon icon={<FaList size={30} />} tooltip="My projects" href="/projects" />
          <Icon icon={<FaDelicious size={30} />} tooltip="Delicious" href="/" />
          <Icon icon={<FaShoppingCart size={30} />} tooltip="Cart" href="/cart" />
          <Icon icon={<FaWallet size={30} />} tooltip="Wallet" href="/" />
          <Icon icon={<FaChartLine size={30} />} tooltip="Trending" href="/" />
          <Icon icon={<FaRegClock size={30} />} tooltip="Speed" href="#" onClick={toggleStopwatch} />
        </ul>

        <ul className="lastMenu" id="lastMenu">
          <Link to="/settings">
            <Icon icon={<FaCog size={30} />} tooltip="Settings" />
          </Link>
          <li onClick={() => setShowSignOutPopup(true)}>
            <a href="#">
              <FaSignOutAlt size={30} />
              <span className="tooltip">Sign Out</span>
            </a>
          </li>
        </ul>
      </menu>

      {showSignOutPopup && (
        <div className="sign-out-popup">
          <p>Are you sure you want to sign out?</p>
          <div className="buttonSignOut">
            <button onClick={handleSignOut}>Yes</button>
            <button onClick={() => setShowSignOutPopup(false)}>No</button>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="success-message">
          Successfully signed out
        </div>
      )}

      {showStopwatch && <Stopwatch onClose={toggleStopwatch} />}
    </>
  );
}

const Icon = ({ icon, tooltip, href, onClick }) => (
  <li>
    <a href={href} onClick={(e) => { e.target.blur(); if(onClick) onClick(); }} style={{ display: "flex", alignItems: "center" }}>
      {icon}
      <span className="tooltip">{tooltip}</span>
    </a>
  </li>
);

export default Menu;
