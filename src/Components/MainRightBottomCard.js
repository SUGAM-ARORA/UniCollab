import React, { useState } from "react";
import TopSeller from "./TopSeller";

function MainRightBottomCard() {
  const [visibleSellers, setVisibleSellers] = useState(3);
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    if (showMore) {
      setVisibleSellers(3);
    } else {
      setVisibleSellers(TopSeller.length);
    }
    setShowMore(!showMore);
  };

  return (
    <div className="bottom_card">
      <div className="bottomCard_name">
        <h2>Top Contributor</h2>
        <a href="#" onClick={handleViewMore}>
          {showMore ? "View Less" : "View More"}
        </a>
      </div>

      {TopSeller.slice(0, visibleSellers).map((seller) => (
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
    </div>
  );
}

export default MainRightBottomCard;

