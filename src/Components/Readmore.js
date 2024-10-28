import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { features } from "./projects";
import "./Readmore.css";
import { Link } from "react-router-dom";
import Arrow from "../Components/projects/arrow.png";
import { ThemeContext } from "../App";

const Readmore = () => {
  const { id } = useParams();
  const feature = features.find((item) => item.id === parseInt(id));

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`readmore ${theme}`}>
      <Link className="arrow" to="/">
        <img src={Arrow} alt="back" />
      </Link>
      <div className="heading">Read More</div>
      <div className="wrapper">
        <div className="top">
          <div className="user-details">
            <div className="name-cont">
              <div className="img-cont">
                <img src={feature.pro} alt={feature.dev} />
              </div>

              <div className="name-wrapper">
                <div id="name">{feature.dev}</div>
                <div className="about">{feature.role}</div>
              </div>
            </div>

            <div className="title-wrapper">
              <div className="title">{feature.title}</div>
              <div className="type">{feature.type}</div>
            </div>

            <button className="code">
              <a href={feature.github}>Source Code</a>
            </button>
          </div>

          <div className="thumbnail">
            <div className="img-cont">
              <img src={feature.img} alt="img" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="description">
            <h1>Description</h1>
            <p>{feature.text}</p>
          </div>
          <div className="about-ath">
            <h1>About the Developer</h1>
            <p>{feature.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readmore;
