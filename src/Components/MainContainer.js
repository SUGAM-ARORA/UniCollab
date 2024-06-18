import React, { useRef, useState } from "react";
import DefaultBanner from "../img/1.jpg";
/* import Card1 from "../img/card1.jpg";
import Card2 from "../img/card2.jpg";
import Card3 from "../img/card3.jpg";
import Card4 from "../img/card4.jpg";
import Card5 from "../img/card5.jpg";
import Card6 from "../img/card6.jpg"; */
import CardMain from "./CardMain";
import "./MainContainer.css";
import MainRightBottomCard from "./MainRightBottomCard";
import MainRightTopCard from "./MainRightTopCard";

const MAX_IMAGE_SIZE = 2185200; // 2MB

function MainContainer() {
  const imageUploadInputRef = useRef(null);

  const [banner, setBanner] = useState(DefaultBanner);

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
              <h2 style={{marginTop:"10px"}}>Feed</h2>
              <a href="#" className="button2" style={{marginTop:"13px"}}>
                Popular
              </a>
            </div>
            <div className="filter_buttons">
              <a href="#" className="button">
                All
              </a>
              <a href="#" className="button2">
                Type
              </a>
              <a href="#" className="button2">
                Sort By
              </a>
            </div>
          </div>

          <main className="fromBottom">
            <CardMain/>
            {/* <CardMain imgSrc={Card1} title={"StockIT"} hearts={"83"} />
            <CardMain imgSrc={Card2} title={"TakeNote"} hearts={"65"} />
            <CardMain imgSrc={Card3} title={"TaRct"} hearts={"32"} />
            <CardMain imgSrc={Card4} title={"To Do"} hearts={"51"} />
            <CardMain imgSrc={Card5} title={"ArchiTect"} hearts={"47"} />
            <CardMain imgSrc={Card6} title={"WeatherLy"} hearts={"77"} /> */}
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
