import React, {useEffect, useState, useRef, useContext} from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faInfoCircle, faWrench, faBriefcase, faStar, faUsers, faEnvelope, faQuestionCircle, faNewspaper, faTimes } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';
import {FaBell, FaChevronDown, FaMoon, FaSun} from "react-icons/fa";
import women from "../img/women.jpg";
import search from "./searchResults";
import "./TopContainer.css";
import {ThemeContext} from "../App"

function TopContainer() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobMenu, setMobMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const dropdownRef = useRef(null);
  const searchbar = useRef(null);

  let tDrop = false;
  let tSearch = false;

  const searchbtnclick = () => {
    searchbar.current.focus();
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (input.length > 0) {
      const results = search.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMobMenu(!mobMenu);
  };

  const handleSignOut = () => {
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className="topContainer">
      <button onClick={toggleTheme} className=" lightbutton">
        {
          theme === "dark" ? <FaSun/> : <FaMoon/>
        }
        </button>
      <div className="navbar">
        <div className="mobview ">
          <div className="bars" onClick={toggleMenu}>{mobMenu?<FontAwesomeIcon icon={faTimes}/>:<FontAwesomeIcon icon={faBars} />}</div>
          <div id="shortview" className={mobMenu ? 'show' : ''}>
            <ul className={`${mobMenu ? "open" : "largeview"}`}>
              <li className="nav-item"><a href='/'><FontAwesomeIcon icon={faHome} /> Home</a></li>
              <li className="nav-item"><a href='/about'><FontAwesomeIcon icon={faInfoCircle} /> About Us</a></li>
              <li className="nav-item"><a href='/services'><FontAwesomeIcon icon={faWrench} /> Services</a></li>
              <li className="nav-item"><a href='/careers'><FontAwesomeIcon icon={faBriefcase} /> Careers</a></li>
              <li className="nav-item"><a href="/freelancer"><FontAwesomeIcon icon={faUsers} /> Hire a Freelancer</a></li>
              <li className="nav-item"><a href='/contacts'><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
              <li className="nav-item"><a href='/RateUs'><FontAwesomeIcon icon={faStar} /> RateUs</a></li>
              <li className="nav-item"><a href='/blogs'><FontAwesomeIcon icon={faNewspaper} /> Blogs</a></li>
              <li className="nav-item" style={{ marginRight: "10px" }}><a href='/faq'><FontAwesomeIcon icon={faQuestionCircle} /> FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="inputBox o2">
          <div className="input-div">
            <i style={{ cursor: isMobile ? 'pointer' : 'default' }} onClick={searchbtnclick} className="searchbtn">
              <BiSearchAlt />
            </i>
            <input
              ref={searchbar}
              type="text"
              placeholder="Search projects, users"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          
          {searchResult ? (
            <div id="search_results">
              {searchResult.map((item, index) => (
                <Link to={`/readmore/${item.id}`} key={index}>
                  <div>
                    <p id="search_result_title" key={`title${index}`}>
                      {item.title}
                    </p>
                    <span key={`category${index}`}>{item.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div className="profileContainer o3">
          <a href="/pricing">
            <button className="go-pro-btn">Go Pro</button>
          </a>

          <div className="notification-container" style={{ gap: "5px" }} ref={dropdownRef}>
            <div className="profileIcon" onClick={toggleDropdown}>
              <FaBell />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <div className="notification-item">
                  User "JohnDoe" has uploaded a new project titled "Introduction to Machine Learning." Check it out now!
                </div>
                <div className="notification-item">
                  User "JaneSmith" has commented on your project "Data Visualization with D3.js." View the comment now.
                </div>
                <div className="notification-item">
                  User "TechMaster" has updated the project "Building a RESTful API with Node.js." See what's new!
                </div>
              </div>
            )}
          </div>
          {isLoggedIn ? (
            <>
              <div className="profileImage">
                <img src={women} alt="" />
              </div>

              <p className="profileName">{username}</p>
              <a className="menuChevron" id="menuChevron" onClick={toggleDrop}>
                <FaChevronDown />
              </a>

              <div className="menuContainer" id="menuContainer">
                <ul>
                  <li>My Profile</li>
                  <li>Theme</li>
                  <li>Followers</li>
                  <li onClick={handleSignOut}>Sign Out</li>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/Login" className="profileIconlogin" style={{ marginRight: "20px" }}>
              Launch Your Journey
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
