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
    FaCoffee, // New icon for sidebar open
    FaBeer, // New icon for sidebar closed
} from "react-icons/fa";

function Menu() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleStopwatch = () => {
    setShowStopwatch(!showStopwatch);
  };

  const handleSignOut = () => {
    console.log("User signed out");
    setTimeout(() => {
      // Handle any additional sign-out logic here
    }, 3000);
  };

  return (
    <>
      <div
        className={`sidebar ${sidebarOpen ? 'open' : ''}`}
        style={{
          width: '220px', // Adjusted width to fit the logo properly
          height: '100%',
          position: 'fixed',
          top: '0',
          left: sidebarOpen ? '0' : '-220px', // Adjusted to match the new width
          background: '#19162c',
          color: 'white',
          transition: '0.3s',
          zIndex: '1000',
        }}
      >
        <div
          className="sidebar-header"
          style={{
            display: 'flex',
            justifyContent: 'center', // Center the logo
            alignItems: 'center',
            padding: '1rem',
            background: '#19162c',
          }}
        >
          <img src={logo} alt="Logo" className="logo" style={{ width: '75px' }} /> {/* Adjusted width */}
        </div>
        <ul
          className="sidebar-menu"
          style={{
            listStyle: 'none',
            padding: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          {[
            { to: "/projects", icon: <FaList size={30} />, text: "My projects" },
            { to: "/Delicious", icon: <FaDelicious size={30} />, text: "Delicious" },
            { to: "/cart", icon: <FaShoppingCart size={30} />, text: "Cart" },
            { to: "/wallet", icon: <FaWallet size={30} />, text: "Wallet" },
            { to: "/Trending", icon: <FaChartLine size={30} />, text: "Trending" },
            { to: "#", icon: <FaRegClock size={30} />, text: "Speed", onClick: toggleStopwatch }
          ].map((item, index) => (
            <li key={index} style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Link to={item.to} onClick={item.onClick} style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                {item.icon}
                <span className="tooltip" style={{ marginLeft: '10px', fontSize: '1.1rem', color: 'white' }}>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul
          className="sidebar-menu"
          style={{
            listStyle: 'none',
            padding: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          <li style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to="/settings" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <FaCog size={30} />
              <span className="tooltip" style={{ marginLeft: '10px', fontSize: '1.1rem', color: 'white' }}>Settings</span>
            </Link>
          </li>
          <li style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <FaSignOutAlt size={30} />
              <span className="tooltip" style={{ marginLeft: '10px', fontSize: '1.1rem', color: 'white' }}>Sign Out</span>
            </Link>
          </li>
        </ul>
      </div>

      <button
        className="menu-toggle"
        onClick={toggleSidebar}
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          zIndex: '1100',
          marginLeft: '-15px',
        }}
      >
        {sidebarOpen ? <FaBeer size={45} /> : <FaCoffee size={45} />}
      </button>
      {showStopwatch && <Stopwatch onClose={toggleStopwatch} />}
    </>
  );
}

export default Menu;


