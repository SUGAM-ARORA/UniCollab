import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import ReadMore from "./ReadMore"; // Import the new ReadMore component

function CardMain({ imgSrc, title, hearts }) {
  const [isVisible, setIsVisible] = useState(false);
  let hideTimeout;

  const handleMouseOver = () => {
    clearTimeout(hideTimeout);
    setIsVisible(true);
  };

  const handleMouseOut = () => {
    hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  return (
    <div className="card_main">
      <img src={imgSrc} alt="" className="card_main_img" title={title} />
      <div className="card_main_name">
        <h2>{title}</h2>
        <div className="card_main_icon">
          <i>
            <BsFillHeartFill /> <span>{hearts}</span>
          </i>
        </div>
      </div>

      <div className="stat">
        <div>
          <p>
            Developer<span>X</span>
          </p>
        </div>
        <div>
          <p>
            Uploaded On<span>dd:mm:yy</span>
          </p>
        </div>
      </div>
      <div className="author">
        <div className="nameAuthor">
          <p>By : &nbsp; </p>
          <p
            id="author_name"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Abc
          </p>
        </div>
      </div>
      <div className="card_main_button">
        <ReadMore content="Read more section" />
        <a href="#" className="button2 btn">
          Source Code
        </a>
      </div>
      <div
        className={`contBox ${isVisible ? "visible" : "hidden"}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="heading">
          <div className="dp"></div>
          <div className="details1">
            <p id="name">@Abc</p>
            <p id="occupation">Web Designer, Video Editor</p>
          </div>
        </div>
        <div className="details2">
          <p id="info">
            I'm a versatile professional skilled in web development and video
            editing, creating seamless online experiences and high-quality
            multimedia content.
          </p>
        </div>
        <div className="btnnn">
          <button>Follow Me</button>
          <button>View Profile</button>
        </div>
      </div>
    </div>
  );
}

export default CardMain;
