import React, { useState, useEffect, useRef } from 'react';
import TopSeller from './TopSeller';

function MainRightBottomCard() {
  const [visibleSellers, setVisibleSellers] = useState(3);
  const [allSellersLoaded, setAllSellersLoaded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const profileListRef = useRef(null);

  const loadMoreSellers = () => {
    setVisibleSellers((prevVisibleSellers) => {
      const newVisibleSellers = prevVisibleSellers + 3;
      if (newVisibleSellers >= TopSeller.length) {
        setAllSellersLoaded(true);
      }
      return newVisibleSellers;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (profileListRef.current) {
        const { scrollTop, clientHeight, scrollHeight } = profileListRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 10 && !allSellersLoaded) {
          loadMoreSellers();
        }
      }
    };

    const profileListElem = profileListRef.current;
    profileListElem.addEventListener('scroll', handleScroll);

    return () => {
      if (profileListElem) {
        profileListElem.removeEventListener('scroll', handleScroll);
      }
    };
  }, [allSellersLoaded]);

  const handleViewMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
    setVisibleSellers((prevVisibleSellers) => 
      showMore ? 3 : TopSeller.length
    );
    setAllSellersLoaded(!showMore); // Reset scroll loading state when toggling
  };

  return (
    <div className="bottom_card" ref={profileListRef}>
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
          <a href="#" className="button">Follow</a>
        </div>
      ))}
    </div>
  );
}

export default MainRightBottomCard;
