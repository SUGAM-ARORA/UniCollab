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

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <Icon icon={<FaRegClock size={30} />} tooltip="Speed" href="#" onClick={toggleStopwatch} /> {/* Add onClick handler */}
        </ul>

        <ul className="lastMenu" id="lastMenu">
          <Link to="/settings">
            <Icon icon={<FaCog size={30} />} tooltip="Settings" />
          </Link>
          <Icon icon={<FaSignOutAlt size={30} />} tooltip="Sign Out" href="/" />
        </ul>
      </menu>

      {showStopwatch && <Stopwatch onClose={toggleStopwatch} />} {/* Render the Stopwatch conditionally */}
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
