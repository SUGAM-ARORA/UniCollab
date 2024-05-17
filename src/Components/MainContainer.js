import React from "react";
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
import { useState } from "react";

function MainContainer() {

  function changeStyle(event) {
    const clickedButton = event.target;
    const buttonContainer = clickedButton.parentElement;
  
    if (clickedButton.tagName === 'SELECT') { // Check if it's a select element
      const selectedOption = clickedButton.value;
  
      // Deactivate all other buttons
      buttonContainer.querySelectorAll('.button2, .button').forEach(button => {
        if (button !== clickedButton) {
          button.classList.remove('button');
        }
      });
  
      for (let i = 0; i < clickedButton.options.length; i++) {
        const option = clickedButton.options[i];
        if (option.value === selectedOption) {
          option.classList.add('button'); 
        } else {
          option.classList.remove('button'); 
        }
      }
    } else {
      clickedButton.classList.toggle('button');
  
      // Optionally, remove "active" from siblings
      if (buttonContainer.classList.contains('filter_buttons')) {
        buttonContainer.querySelectorAll('.button2, .button').forEach(button => {
          if (button !== clickedButton) {
            button.classList.remove('button');
          }
        });
      }
    }
  }

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
              <a href="#" className="button">
                Upload
              </a>
              
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="#" className="button2" onClick={changeStyle} id="Popular">
                POPULAR
              </a>
            </div>
            <div className="filter_buttons">
              <a href="#" onClick={changeStyle} className="button2" id="All">
                ALL
              </a>
             <span id="menu" onClick={changeStyle}>
              <select id="options" onchange="location = this.value;" onClick={changeStyle} className="button2">
                <option>TYPE</option>
                <hr/>
                <option>CSS</option>
                <option>JAVASCRIPT</option>
                <option>REACT</option>
                <option>EXPRESS</option>
                <option>TAILWIND</option>
                <option>NEXT</option>
                <option>DOCKER</option>
                <option>KUBERNETES</option>
                <option>PYTORCH</option>
                <option>GENERATIVE AI</option>
                 </select>
                 </span>   
                 <span id="menu" onClick={changeStyle} >
              <select id="options" onchange="location = this.value;"  className="button2">
                <option>SORT BY</option>
                <hr/>
                <option>DATE</option>
                <option>SIZE</option>
                <option>A-Z</option>
                <option>Z-A</option>
                <option>AUTHORS</option>
                <option>CATEGORIES</option>
                <option>TEXT</option>
                <option>GROUPS</option>
                 </select>
                 </span>   
            </div>
          </div>

          <main id="allcards">
            <CardMain id={1} imgSrc={Card1} title={"StockIT"} hearts={"83"} />
            <CardMain id={2} imgSrc={Card2} title={"TakeNote"} hearts={"65"} />
            <CardMain id={3} imgSrc={Card3} title={"TaRct"} hearts={"32"} />
            <CardMain id={4} imgSrc={Card4} title={"To Do"} hearts={"51"} />
            <CardMain id={5} imgSrc={Card5} title={"ArchiTect"} hearts={"47"} />
            <CardMain id={6} imgSrc={Card6} title={"WeatherLy"} hearts={"77"} />
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
