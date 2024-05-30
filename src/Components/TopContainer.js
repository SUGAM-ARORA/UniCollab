import React, { useEffect, useState, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import women from "../img/women.jpg";
import search from "./searchResults";
function TopContainer() {
  const [input,setInput]=useState("")
  const [searchResult,setSearchResult]=useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const dropdownRef = useRef(null);
  useEffect(() => {
    // Add event listener to detect clicks anywhere on the page
    window.addEventListener("click", handleOutsideClick);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
useEffect(()=>{
 if(input.length>0){
  const results=search.filter(item=>item.title.toLowerCase().includes(input.toLocaleLowerCase()));
  setSearchResult(results)
 }
 else{
  setSearchResult(null)
 }
},[input])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleOutsideClick = (event) => {
    // Check if the clicked element is outside the dropdown content
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Search projects, users" onChange={(e)=>setInput(e.target.value)} />
        <i>
          <BiSearchAlt />
        </i>
        {searchResult?
      <div id="search_results">
        {
          searchResult.map((item,index)=>(
            <div key={`parent_container${index}`}>
              <p id='search_result_title' key={`title${index}`}>{item.title}</p>
              <span key={`category${index}`}>{item.category}</span>
            </div>
          ))
        }
      </div>
      :<></>
        }
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
        <i className="menuChevron" onClick={toggleMenu} id="menuChevron">  {/* toggle visibility of menuContainer on click */}
          <FaChevronDown />
        </i>

        <div className="menuContainer" id="menuContainer" style={{ display: isMenuOpen ? 'block' : 'none' }}>   {/* menuContainer hidden on page load (false state) */}
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