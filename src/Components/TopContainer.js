import React, { useEffect, useState, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import women from "../img/women.jpg";
import search from "./searchResults";

function TopContainer() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let tDrop = false;
  let tSearch = false;

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
    if(!tSearch){
      document.getElementById("search_input").style.display="block";
      tSearch = true;
    } else{
      document.getElementById("search_input").style.display="none";
      tSearch = false;
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 524);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 524);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='topContainer'>
      <div className='inputBox'>
        <input
          className="search_input"
          id="search_input"
          type='text'
          placeholder='Search projects, users'
          onChange={(e) => setInput(e.target.value)}
        />
        <a className="search_icon" onClick={isMobile ? searchDropDown : null}
        style={{ cursor: isMobile ? 'pointer' : 'default' }}>
          <BiSearchAlt />
        </a>
        {searchResult ? (
          <div id='search_results'>
            {searchResult.map((item, index) => (
              <div key={`parent_container${index}`}>
                <p id='search_result_title' key={`title${index}`}>
                  {item.title}
                </p>
                <span key={`category${index}`}>{item.category}</span>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className='profileContainer'>
        <div className='notification-container' ref={dropdownRef}>
          <div className='profileIcon' onClick={toggleDropdown}>
            <FaBell />
          </div>
          {isDropdownOpen && (
            <div className='dropdown-content'>
              {/* Notification items */}
              <div className='notification-item'>
                User "JohnDoe" has uploaded a new project titled "Introduction
                to Machine Learning." Check it out now!
              </div>
              <div className='notification-item'>
                User "JaneSmith" has commented on your project "Data
                Visualization with D3.js." View the comment now.
              </div>
              <div className='notification-item'>
                User "TechMaster" has updated the project "Web Development with
                React.js" with bug fixes. Explore the updated version.
              </div>
              <div className='notification-item'>
                Congratulations! Your project "Artificial Intelligence in
                Robotics" has been approved by the moderators. It's now live on
                the platform.
              </div>
              <div className='notification-item'>
                User "CodeNinja" has sent you a collaboration request for the
                project "Cybersecurity Best Practices." Accept or decline the
                request.
              </div>
              <p className='seeAll'>See all notifications</p>
            </div>
          )}
        </div>

        <div className='profileImage'>
          <img src={women} alt='' />
        </div>

        <p className='profileName'>Sugam Arora</p>
        <a className='menuChevron' id='menuChevron' onClick={toggleDrop}>
          <FaChevronDown />
        </a>

        <div className='menuContainer' id='menuContainer'>
          <ul>
            <li>My Profile</li>
            <li>Theme</li>
            <li>Followers</li>
            <li>Sign Out</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
