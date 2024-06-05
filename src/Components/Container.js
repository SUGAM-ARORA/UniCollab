import React from "react";

import { useNavigate } from "react-router-dom";
import "./Container.css";
import TopContainer from "./TopContainer";
import MainContainer from "./MainContainer";
import Menu from "./Menu";

function Container() {
 
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate("/chatapp");
  };


  return (
    <div className="container">
      <Menu />
      <div className="content">
        <TopContainer />
        <MainContainer />

        <button className="chat-button" 
        onClick={handleChatClick}
        aria-label="Open live chat"
        tabIndex={0}
        >
        Chat
        </button>

      </div>
    </div>
  );
}



export default Container;
