import React from "react";
import "./Container.css";
import TopContainer from "./TopContainer";
import MainContainer from "./MainContainer";
import Menu from "./Menu";

function Container() {
  return (
    <div id="container"  className="container">
      <Menu />
      <div className="content">
        <TopContainer />
        <MainContainer />
      </div>
    </div>
  );
}

export default Container;
