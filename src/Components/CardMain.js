// CardMain.js
import React, { useState, useEffect } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardMain({ cards }) {
  const [isVisible, setIsVisible] = useState(new Array(cards.length).fill(false));
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
      {cards.map((project, index) => (
        <div className="card_main" key={index}>
          <img src={project.imgSrc} alt="" className="card_main_img" title={project.title} />
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
    </div>
  );
}

CardMain.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      hearts: PropTypes.number.isRequired,
      dev: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      pro: PropTypes.string,
      role: PropTypes.string,
      about: PropTypes.string,
    })
  ).isRequired,
};

export default CardMain;
