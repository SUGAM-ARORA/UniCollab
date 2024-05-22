import React, { useState } from "react";
import TopSeller from "./TopSeller";

function MainRightBottomCard() {
  // Initialize follow state for each seller
  const [followState, setFollowState] = useState({});

  const changeFollowing = (sellerId) => {
    // Toggle follow state for the clicked seller
    setFollowState(prevState => ({
      ...prevState,
      [sellerId]: !prevState[sellerId]
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
          <div className="topSeller" key={seller.id}>
            <div className="topSellerImg">
              <img src={seller?.imgSrc} alt="" />
            </div>
            <div className="topSellerName">
              <p>
                {seller?.seller_name} <span>{seller?.username}</span>
              </p>
            </div>
            <div onClick={() => changeFollowing(seller.id)} className="button">
              {/* Check follow state for the current seller */}
              {followState[seller.id] ? 'Following' : 'Follow'}
            </div>
          </div>
        ))}
    </div>
  );
}

export default MainRightBottomCard;
