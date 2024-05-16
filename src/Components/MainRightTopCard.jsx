import React from "react";

function MainRightTopCard() {
  return (
    <div className="topCard">
      <div className="topCard_name">
        <h2>Statistics</h2>
        <a href="#">View More</a>
      </div>

      <div className="earning">
        <p>
          Projects Uploaded <span>185</span>
        </p>

        <p>
          Projects Canceled <span>25</span>
        </p>
        <p>
          Profile Views <span>70</span>
        </p>

        <p>
          Total Exp earned <span>300 exp</span>
        </p>
      </div>
    </div>
  );
}

export default MainRightTopCard;
