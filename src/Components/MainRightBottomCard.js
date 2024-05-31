import React from "react";
import TopSeller from "./TopSeller";

import { Link } from "react-router-dom";

function MainRightBottomCard() {
  return (
    <div className="bottom_card">
      <div className="bottomCard_name">
        <h2>Top Contributor</h2>
        <a href="#">View More</a>
      </div>

      <Link to="/profile-page">
        {TopSeller &&
          TopSeller.map((seller) => (
            <div className="topSeller fromTop" key={seller.id}>
              <div className="topSellerImg">
                <img src={seller?.imgSrc} alt="" />
              </div>
              <div className="topSellerName">
                <p>
                  {seller?.seller_name} <span>{seller?.username}</span>
                </p>
              </div>
              <a href="#" className="button">
                Follow
              </a>
            </div>
          ))}
      </Link>

    </div>
  );
}

export default MainRightBottomCard;
