import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY > 200); // Change 200 to your desired scroll distance
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <Wrapper onClick={goToTop}>
          <FaArrowUp className="top-btn--icon" />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 72px;
  left: 30px;
  color: white;
  background-color: #ff21bc;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  &:hover {
    background-color: darkturquoise;
  }
`;

export default GoToTop;