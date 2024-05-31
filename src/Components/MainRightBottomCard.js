import React from "react";
import TopSeller from "./TopSeller";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

function MainRightBottomCard() {
  return (
    <div className="bottom_card">
      <div className="bottomCard_name">
        <h2>Top Contributor</h2>
        <a href="#">View More</a>
      </div>

      {TopSeller &&
        TopSeller.map((seller) => (
          <div className="topSeller fromTop" key={seller.id}>
            <div className="topSellerImg">
              <img src={seller?.imgSrc} alt="" />
            </div>
            <Link to="/profile-page">
              <div className="topSellerName">
                <p>
                  {seller?.seller_name} <span>{seller?.username}</span>
                </p>
              </div>
            </Link>
            <a href="#" className="button" onClick={() => toast.success(`You're now following ${seller?.seller_name}!`)}>
              Follow
            </a>
          </div>
        ))}

    </div>
  );
}

export default MainRightBottomCard;
