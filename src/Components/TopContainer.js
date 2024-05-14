import React, { useEffect,useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import women from "../img/women.jpg";
import search from "./searchResults";
function TopContainer() {
  const [input,setInput]=useState("")
  const [searchResult,setSearchResult]=useState(null)
  useEffect(() => {
    const mouseTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");
    mouseTarget.addEventListener("mouseenter", () => {
      mouseTarget.style.transform = "rotate(180deg)";
      menuContainer.style.transform = "translateX(0px)";
    });

    menuContainer.addEventListener("mouseleave", () => {
      mouseTarget.style.transform = "rotate(0deg)";
      menuContainer.style.transform = "translateX(300px)";
    });
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
        <i className="profileIcon">
          <FaBell />
        </i>
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
