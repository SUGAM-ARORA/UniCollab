import React, { useState, useEffect } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { features } from "./projects";

function CardMain({ imgSrc, title, hearts }) {
  const [isVisible, setIsVisible] = useState(new Array(features.length).fill(false));

  let hideTimeout;

  useEffect(() => {
    return () => {
      clearTimeout(hideTimeout);
    };
  }, []);

  const handleMouseOver = (index) => {
    clearTimeout(hideTimeout);
    setIsVisible((prevIsVisible) => {
      prevIsVisible[index] = true;
      return [...prevIsVisible];
    });
  };
  
  const handleMouseOut = (index) => {
    hideTimeout = setTimeout(() => {
      setIsVisible((prevIsVisible) => {
        prevIsVisible[index] = false;
        return [...prevIsVisible];
      });
    }, 200);
  };

  return (
    <div className="card">
    { features.map((project,index)=>
    <div className="card_main" key={index}>
      <img src={project.img} alt="" className="card_main_img" title={project.title} />
      <div className="card_main_name">
        <h2>{project.title}</h2>
        <div className="card_main_icon">
          <i>
            <BsFillHeartFill /> <span>{project.hearts}</span>
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
        onMouseOver={() => handleMouseOver(index)}
        onMouseOut={() => handleMouseOut(index)}
      >
            Abc
          </p>
        </div>
      </div>
      <div className="card_main_button">
        <Link to={`/readmore/${project.id}`} className="button btn">
          Read More
        </Link>
        <a href="#" className="button2 btn">  
          Source Code
        </a>
      </div>
      <div
      className={`contBox ${isVisible[index]? "visible" : "hidden"}`}
      onMouseOver={() => handleMouseOver(index)}
      onMouseOut={() => handleMouseOut(index)}
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
  )}
  </div>
  );
}

export default CardMain;

