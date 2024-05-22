import React, { useState } from "react";
import "./MainContainer.css";
import Banner from "../img/1.jpg";
import CardMain from "./CardMain";
import Card1 from "../img/card1.jpg";
import Card2 from "../img/card2.jpg";
import Card3 from "../img/card3.jpg";
import Card4 from "../img/card4.jpg";
import Card5 from "../img/card5.jpg";
import Card6 from "../img/card6.jpg";
import MainRightTopCard from "./MainRightTopCard";
import MainRightBottomCard from "./MainRightBottomCard";

function MainContainer() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUnupload = () => {
    setUploadedImage(null);
    setIsUploaded(false);
  };

  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textContainer">
            <h1>UniCollab</h1>
            
            <br></br> 
            <div className="bid">
            {!isUploaded ? (
                <label className="button" htmlFor="uploadInput">
                  Upload
                  <input
                    id="uploadInput"
                    type="file"
                    onChange={handleUpload}
                    style={{ display: "none" }}
                  />
                </label>
              ) : (
                <button className="button" onClick={handleUnupload}>
                  Unupload
                </button>
              )}
              
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="#" className="button2">
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

          <main>
            <CardMain imgSrc={Card1} title={"StockIT"} hearts={"83"} />
            <CardMain imgSrc={Card2} title={"TakeNote"} hearts={"65"} />
            <CardMain imgSrc={Card3} title={"TaRct"} hearts={"32"} />
            <CardMain imgSrc={Card4} title={"To Do"} hearts={"51"} />
            <CardMain imgSrc={Card5} title={"ArchiTect"} hearts={"47"} />
            <CardMain imgSrc={Card6} title={"WeatherLy"} hearts={"77"} />
          </main>
        </div>
      </div>
      <div className="right">
        <MainRightTopCard />
        <MainRightBottomCard />
      </div>
    </div>
  );
}

export default MainContainer;
