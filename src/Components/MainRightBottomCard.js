import React, {useState, useEffect, useRef, useContext} from 'react';
import TopSeller from './TopSeller';
import {ThemeContext} from "../App";
import './MainRightTopCard.css';


function MainRightBottomCard() {
  const [visibleSellers, setVisibleSellers] = useState(3);
  const [allSellersLoaded, setAllSellersLoaded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [hoveredSeller, setHoveredSeller] = useState(null);
  const profileListRef = useRef(null);

  const handleButton = (e) => {
    if (e.target.textContent === "Follow") {
      e.target.textContent = "Following";
      e.target.style.background = "rgb(25, 22, 44)";
      e.target.style.border = "2px solid #443b78";
    } else if (e.target.textContent === "Following") {
      e.target.textContent = "Follow";
      e.target.style.background = "linear-gradient(#ff21bc, #b21783)";
      e.target.style.border = "";
    }
  };

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

  const handleMouseEnter = (id) => {
    setHoveredSeller(id);
  };

  const handleMouseLeave = () => {
    setHoveredSeller(null);
  };

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`bottom_card ${theme}`} ref={profileListRef}>
      <div className="bottomCard_name">
        <h2>Top Contributor</h2>
        <a href="#" onClick={handleViewMore}>
          {showMore ? "View Less" : "View More"}
        </a>
      </div>

      {TopSeller.slice(0, visibleSellers).map((seller) => (
        <div
          className="topSeller fromTop"
          key={seller.id}
          onMouseEnter={() => handleMouseEnter(seller.id)}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor: hoveredSeller === seller.id ? '#cf00a3' : 'initial',
            transition: 'background-color 0.3s ease'
          }}
        >
          <div className="topSellerImg">
            <img src={seller?.imgSrc} alt="" />
          </div>
          <div className="topSellerName">
            <p>
              {seller?.seller_name} <span>{seller?.username}</span>
            </p>
          </div>
          <a href="#" className="button" onClick={handleButton}>Follow</a>
        </div>
      ))}
    </div>
  );
}

export default MainRightBottomCard;
