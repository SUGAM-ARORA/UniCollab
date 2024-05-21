import React from "react";
import "./Container.css";
import TopContainer from "./TopContainer";
import MainContainer from "./MainContainer";


function Container() {
  return (
    <div className="container">
     
      <div className="content">
        <TopContainer />
        <MainContainer />
      </div>
    </div>
  );
}

export default Container;
