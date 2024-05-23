import React, { useState, useEffect } from "react";
import { BsFillHeartFill } from "react-icons/bs";

function CardMain({ imgSrc, title, hearts }) {

  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleMouseOut = () => {
    setIsVisible(false);
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
        <a href="#" className="button btn">
          Read More
        </a>
        <a href="#" className="button2 btn">
          Source Code
        </a>
      </div>
      <div className={`contBox ${isVisible ? 'visible' : 'hidden'}`}>
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
