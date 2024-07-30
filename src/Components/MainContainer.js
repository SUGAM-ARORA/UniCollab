import React, { useRef, useState, useEffect } from "react";
import DefaultBanner from "../img/1.jpg";
import CardMain from "./CardMain";
import Popular from "./Popular"; // Correctly import Popular component
import "./MainContainer.css";
import MainRightBottomCard from "./MainRightBottomCard";
import MainRightTopCard from "./MainRightTopCard";

const MAX_IMAGE_SIZE = 2185200; // 2MB

function MainContainer() {
  const imageUploadInputRef = useRef(null);
  const dropdownRef = useRef(null);
  const [banner, setBanner] = useState(DefaultBanner);
  const [activeButton, setActiveButton] = useState("Feed");
  const [activeFilterButton, setActiveFilterButton] = useState("All");
  const [sortByOpen, setSortByOpen] = useState(false);
  const [nameDropdownOpen, setNameDropdownOpen] = useState(false);

  const uploadImageHandler = () => {
    imageUploadInputRef?.current?.click();
  };

  const selectImageHandler = (e) => {
    if (e.target.files && e?.target?.files[0]?.size < MAX_IMAGE_SIZE) {
      setBanner(URL.createObjectURL(e?.target?.files[0]));
    } else {
      console.error("Image size should be less than 2MB!");
    }
  };

  const toggleButtonHandler = (buttonName) => {
    setActiveButton(buttonName);
  };

  const toggleFilterButtonHandler = (buttonName) => {
    setActiveFilterButton(buttonName);
    if (buttonName === "Sort By") {
      setSortByOpen(!sortByOpen);
    } else {
      setSortByOpen(false);
    }
  };

  const toggleNameDropdown = () => {
    setNameDropdownOpen(!nameDropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSortByOpen(false);
        setNameDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner zoomIn"
          style={{
            background: `url(${banner}) center center no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <div className="textContainer">
            <div className="bid">
              <button
                type="button"
                className="button"
                onClick={uploadImageHandler}
                style={{
                  color: "white",
                }}
              >
                Upload
              </button>
            </div>
          </div>

          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            ref={imageUploadInputRef}
            onChange={selectImageHandler}
            hidden
          />
        </div>

        <div className="cards zoomIn">
          <div className="filters">
            <div className="popular">
              <button
                className="button2"
                style={{
                  marginTop: "13px",
                  backgroundColor: activeButton === "Feed" ? "#cf00a3" : "#19162c",
                  color: "white",
                }}
                onClick={() => toggleButtonHandler("Feed")}
              >
                Feed
              </button>
              <button
                className="button2"
                style={{
                  marginTop: "13px",
                  backgroundColor: activeButton === "Popular" ? "#cf00a3" : "#19162c",
                  color: "white",
                }}
                onClick={() => toggleButtonHandler("Popular")}
              >
                Popular
              </button>
            </div>
            <div className="filter_buttons">
              <button
                className="button2"
                style={{
                  color: "white",
                  backgroundColor: activeFilterButton === "All" ? "#cf00a3" : "#19162c",
                }}
                onClick={() => toggleFilterButtonHandler("All")}
              >
                All
              </button>
              <button
                className="button2"
                style={{
                  color: "white",
                  backgroundColor: activeFilterButton === "Type" ? "#cf00a3" : "#19162c",
                }}
                onClick={() => toggleFilterButtonHandler("Type")}
              >
                Type
              </button>
              <button
                className="button2"
                onClick={() => toggleFilterButtonHandler("Sort By")}
                style={{
                  color: "white",
                  backgroundColor: activeFilterButton === "Sort By" ? "#cf00a3" : "#19162c",
                }}
              >
                Sort By
              </button>
              {sortByOpen && (
                <div className="dropdown" ref={dropdownRef}>
                  <button className="dropdown-item" onClick={toggleNameDropdown}>
                    Name
                  </button>
                  <button className="dropdown-item">Role</button>
                  <button className="dropdown-item">Hearts</button>
                  {nameDropdownOpen && (
                    <div className="sub-dropdown">
                      <button className="dropdown-item">Ascending</button>
                      <button className="dropdown-item">Descending</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <main className="fromBottom">
            {activeButton === "Feed" ? (
              <CardMain />
            ) : (
              <Popular /> // Use the Popular component here
            )}
          </main>
        </div>
      </div>
      <div className="right fromRight">
        <MainRightTopCard />
        <MainRightBottomCard />
      </div>
    </div>
  );
}

export default MainContainer;
