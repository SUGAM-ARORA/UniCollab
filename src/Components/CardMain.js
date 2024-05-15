import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

function CardMain({ id, imgSrc, title, hearts }) {
  return (
    <div className="card_main" id={id}>
      <img src={imgSrc} alt="" className="card_main_img" />
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

      <div className="card_main_button">
        <a href="#" className="button btn">
          Read More
        </a>
        <a href="#" className="button2 btn">
          Source Code
        </a>
      </div>
    </div>
  );
}

export default CardMain;
