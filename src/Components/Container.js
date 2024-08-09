import React, {useContext, useEffect} from "react";
import "./Container.css";
import TopContainer from "./TopContainer";
import MainContainer from "./MainContainer";
import Menu from "./Menu";
import {ThemeContext} from "../App";



function Container() {

    const {theme} = useContext(ThemeContext)
    let themecss = ""
    useEffect(()=>{
        themecss =  localStorage.getItem("theme")
    },[theme])



    console.log(theme)

  return (
    <div className={`container ${theme}`}>
      <Menu />
      <div className="content">
        <TopContainer />
        <MainContainer />
      </div>
    </div>
  );
}

export default Container;
