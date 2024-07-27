import React, { useState, useEffect, useRef } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { features } from "./projects";

function CardMain() {
  const [isVisible, setIsVisible] = useState(
    new Array(features.length).fill(false)
  );
  const containerRef = useRef(null);
  let hideTimeout;

  useEffect(() => {
    return () => {
      clearTimeout(hideTimeout);
    };
  }, []);

  const handleMouseOver = (index) => {
    clearTimeout(hideTimeout);
    setIsVisible((prevIsVisible) => {
      const newIsVisible = [...prevIsVisible];
      newIsVisible[index] = true;
      return newIsVisible;
    });
  };

  const handleMouseOut = (index) => {
    hideTimeout = setTimeout(() => {
      setIsVisible((prevIsVisible) => {
        const newIsVisible = [...prevIsVisible];
        newIsVisible[index] = false;
        return newIsVisible;
      });
    }, 200);
  };

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="card"
      ref={containerRef}
      style={{ overflowY: "auto", maxHeight: "100vh" }}
    >
      {features.map((project, index) => (
        <div className="card_main" key={index}>
          <img
            src={project.img}
            alt=""
            className="card_main_img"
            title={project.title}
          />
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
                {project.dev}
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
            className={`contBox ${isVisible[index] ? "visible" : "hidden"}`}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={() => handleMouseOut(index)}
          >
            <div className="heading">
              <img width={40} src={project.pro} alt="" />
              <div className="details1">
                <p id="name">@{project.dev}</p>
                <p id="occupation">{project.role}</p>
              </div>
            </div>
            <div className="details2">
              <p id="info">{project.about}</p>
            </div>
            <div className="btnnn">
              <button>Follow Me</button>
              <button>
                <Link to={`/profile/${project.id}`}>View Profile</Link>
              </button>
            </div>
          </div>
        </div>
        
      ))}

      <div
        style={{
          textAlign: "center",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button onClick={scrollToTop} className="button btn">
          To the Top
        </button>
      </div>
    </div>
    
  );
}

export default CardMain;
