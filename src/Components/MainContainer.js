import React, {useRef, useState, useEffect, useContext} from "react";
import DefaultBanner from "../img/1.jpg";
import CardMain from "./CardMain";
import Popular from "./Popular";
import "./MainContainer.css";
import MainRightBottomCard from "./MainRightBottomCard";
import MainRightTopCard from "./MainRightTopCard";
import {ThemeContext} from "../App";

const MAX_IMAGE_SIZE = 2185200; // 2MB

function MainContainer() {
  const imageUploadInputRef = useRef(null);
  const dropdownRef = useRef(null);
  const typeDropdownRef = useRef(null);
  const [banner, setBanner] = useState(DefaultBanner);
  const [activeButton, setActiveButton] = useState("Feed");
  const [activeFilterButton, setActiveFilterButton] = useState("All");
  const [sortByOpen, setSortByOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [projectSubDropdownOpen, setProjectSubDropdownOpen] = useState(false);
  const [developerSubDropdownOpen, setDeveloperSubDropdownOpen] = useState(false); // State for Developer sub-dropdown
  const [nameDropdownOpen, setNameDropdownOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState({key:"name", order: "asc"});

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
    } else if (buttonName === "Type") {
      setTypeDropdownOpen(!typeDropdownOpen);
    } else {
      setSortByOpen(false);
      setTypeDropdownOpen(false);
    }
  };

  const toggleProjectSubDropdown = () => {
    setProjectSubDropdownOpen(!projectSubDropdownOpen);
  };

  const toggleDeveloperSubDropdown = () => {
    setDeveloperSubDropdownOpen(!developerSubDropdownOpen); // Toggle Developer sub-dropdown
  };

   const toggleNameDropdown = () => {
    setNameDropdownOpen(!nameDropdownOpen);
   };

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSortByOpen(false);
        setNameDropdownOpen(false);
      }
      if (typeDropdownRef.current && !typeDropdownRef.current.contains(event.target)) {
        setTypeDropdownOpen(false);
        setProjectSubDropdownOpen(false);
        setDeveloperSubDropdownOpen(false); // Close Developer sub-dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const {theme} = useContext(ThemeContext)


  const handleSortChange = (key, order) => {
    setSortCriteria({ key, order });
  };

  const sortProjects = (projects) => {
    return projects.sort((a, b) => {
      if (sortCriteria.key === 'name') {
        if (sortCriteria.order === 'asc') {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      } else if (sortCriteria.key === 'hearts') {
        return b.hearts - a.hearts; // descending order for hearts
      }
      return 0;
    });
  };

  return (
    <div className={`maincontainer ${theme}`}>
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
              {typeDropdownOpen && (
                <div className="dropdown" ref={typeDropdownRef}>
                  <button className="dropdown-item" onClick={toggleProjectSubDropdown}>
                    Project
                  </button>
                  {projectSubDropdownOpen && (
                    <div className="sub-dropdown">
                      <button className="dropdown-item">StockIT</button>
                      <button className="dropdown-item">TakeNote</button>
                      <button className="dropdown-item">TaRct</button>
                      <button className="dropdown-item">To Do</button>
                      <button className="dropdown-item">ArchiTect</button>
                      <button className="dropdown-item">WeatherLy</button>
                      <button className="dropdown-item">TypingTest</button>
                      <button className="dropdown-item">Artisan</button>
                      <button className="dropdown-item">ChrisClark</button>
                      <button className="dropdown-item">ChrisMiller</button>
                      <button className="dropdown-item">SearchEngine</button>
                      <button className="dropdown-item">AIimage</button>
                    </div>
                  )}
                  <button className="dropdown-item" onClick={toggleDeveloperSubDropdown}>
                    Developer
                  </button>
                  {developerSubDropdownOpen && (
                    <div className="sub-dropdown">
                      <button className="dropdown-item">X</button>
                    </div>
                  )}
                </div>
              )}
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
                  <button className="dropdown-item" onClick={() => handleSortChange("hearts", "desc")}>Hearts</button>
                  {nameDropdownOpen && (
                    <div className="sub-dropdown">
                      <button className="dropdown-item" onClick={() => handleSortChange("name", "asc")}>Ascending</button>
                      <button className="dropdown-item" onClick={() => handleSortChange("name", "desc")}>Descending</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <main className="fromBottom">
            {activeButton === "Feed" ? (
              <CardMain sortProjects={sortProjects}/>
            ) : (
              <Popular />
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
