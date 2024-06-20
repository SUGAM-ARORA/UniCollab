import React, { useEffect, useState, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import {Link} from 'react-router-dom';
import { FaBell, FaChevronDown} from "react-icons/fa";
import women from "../img/women.jpg";
import search from "./searchResults";
import "./TopContainer.css"

function TopContainer() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobMenu, setMobMenu] = useState(false);
  const dropdownRef = useRef(null);
  const searchbar = useRef(null);

  let tDrop = false;
  let tSearch = false;

  const searchbtnclick = () => {
    searchbar.current.focus();
  };

  useEffect(() => {
    // Add event listener to detect clicks anywhere on the page
    window.addEventListener("click", handleOutsideClick);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (input.length > 0) {
      const results = search.filter((item) =>
        item.title.toLowerCase().includes(input.toLocaleLowerCase())
      );
      setSearchResult(results);
    } else {
      setSearchResult(null);
    }
  }, [input]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event) => {
    // Check if the clicked element is outside the dropdown content
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDrop = () => {
    if (!tDrop) {
      document.getElementById("menuContainer").style.display = "block";
      tDrop = true;
    } else {
      document.getElementById("menuContainer").style.display = "none";
      tDrop = false;
    }
  };

  const searchDropDown = () => {
    if (!tSearch) {
      document.getElementById("search_input").style.display = "block";
      tSearch = true;
    } else {
      document.getElementById("search_input").style.display = "none";
      tSearch = false;
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 524);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 524);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMobMenu(!mobMenu);
  };

  return (
    <div className="topContainer">
      <div className="navbar">
        <ul className="largeview">
          <li id="list"><a href='/'>Home</a></li>
          <li id="list"><a href='/about'>About Us</a></li>
          <li id="list"><a href='/services'>Services</a></li>
          <li id="list"><a href='/careers'>Careers</a></li>
          <li id="list"><a href='/contacts'>Contact</a></li>
          <li id="list"><a href='/blogs'>Blogs</a></li>
          <li id="list"><a href='/faq'>FAQ</a></li>
        </ul>

        <div className="mobview">
          <div className="bars" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></div>
          <div id="shortview" className={mobMenu ? 'show' : ''}>
            <ul className="open">
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>About Us</a></li>
              <li><a href='/services'>Services</a></li>
              <li><a href='/careers'>Careers</a></li>
              <li><a href='/contacts'>Contact</a></li>
              <li><a href='/blogs'>Blogs</a></li>
              <li><a href='/faq'>FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="inputBox">
          <input
            ref={searchbar}
            type="text"
            placeholder="Search projects, users"
            onChange={(e) => setInput(e.target.value)}
          />
          <i style={{ cursor: isMobile ? 'pointer' : 'default' }} onClick={searchbtnclick} className="searchbtn">
            <BiSearchAlt />
          </i>
          {searchResult ? (
            <div id="search_results">
              {searchResult.map((item, index) => (
                <div key={`parent_container${index}`}>
                  <p id="search_result_title" key={`title${index}`}>
                    {item.title}
                  </p>
                  <span key={`category${index}`}>{item.category}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="profileContainer">
          <a href="/pricing">
            <button className="go-pro-btn">Go Pro</button>
          </a>
          <div className="notification-container" ref={dropdownRef}>
            <div className="profileIcon" onClick={toggleDropdown}>
              <FaBell />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-content">
                {/* Notification items */}
                <div className="notification-item">
                  User "JohnDoe" has uploaded a new project titled "Introduction
                  to Machine Learning." Check it out now!
                </div>
                <div className="notification-item">
                  User "JaneSmith" has commented on your project "Data
                  Visualization with D3.js." View the comment now.
                </div>
                <div className="notification-item">
                  User "TechMaster" has updated the project "Web Development with
                  React.js" with bug fixes. Explore the updated version.
                </div>
                <div className="notification-item">
                  Congratulations! Your project "Artificial Intelligence in
                  Robotics" has been approved by the moderators. It's now live on
                  the platform.
                </div>
                <div className="notification-item">
                  User "CodeNinja" has sent you a collaboration request for the
                  project "Cybersecurity Best Practices." Accept or decline the
                  request.
                </div>
                <p className="seeAll">See all notifications</p>
              </div>
            )}
          </div>

          <Link to="/Login" className="profileIconlogin">
          Launch Your Journey
             </Link>
             
          {/* <div className="profileImage">
            <img src={women} alt="" />
          </div>

          <p className="profileName">Sugam Arora</p>
          <a className="menuChevron" id="menuChevron" onClick={toggleDrop}>
            <FaChevronDown />
          </a>

          <div className="menuContainer" id="menuContainer">
            <ul>
              <li>My Profile</li>
              <li>Theme</li>
              <li>Followers</li>
              <li>Sign Out</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
