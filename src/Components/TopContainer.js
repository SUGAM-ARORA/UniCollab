import React, { useEffect, useState, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import women from "../img/women.jpg";

function TopContainer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Search projects, users" />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <div className="profileContainer">
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

        <div className="profileImage">
          <img src={women} alt="" />
        </div>

        <p className="profileName">Sugam Arora</p>
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>

        <div className="menuContainer" id="menuContainer">
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
