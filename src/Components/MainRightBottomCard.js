import React, { useState } from "react";
import TopSeller from "./TopSeller";

function MainRightBottomCard() {
  // Initialize state to track follow/unfollow status for each seller
  const [followStatus, setFollowStatus] = useState(
    TopSeller.reduce((acc, seller) => {
      acc[seller.id] = false; // initially, everyone is not followed
      return acc;
    }, {})
  );

  // Function to toggle follow/unfollow status
  const toggleFollow = (sellerId) => {
    setFollowStatus((prevStatus) => ({
      ...prevStatus,
      [sellerId]: !prevStatus[sellerId],
    }));
  };

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
            <div className="topSellerName">
              <p>
                {seller?.seller_name} <span>{seller?.username}</span>
              </p>
            </div>
            <button
              onClick={() => toggleFollow(seller.id)}
              className="button"
            >
              {followStatus[seller.id] ? "Unfollow" : "Follow"}
            </button>
          </div>
        ))}
    </div>
  );
}

export default MainRightBottomCard;
