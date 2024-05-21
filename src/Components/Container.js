import React from "react";
import "./Container.css";
import TopContainer from "./TopContainer";
import MainContainer from "./MainContainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wallet from "./Wallet";
import Menu from "./Menu";
function Container() {
  return (

    <div className="container">
       <Router>
       <Menu />
         <Routes>
           <Route path="/wallet" element={<Wallet />} />
           </Routes>
       <div className="content">
        <TopContainer />
        <MainContainer />
      </div>
      </Router>
    </div>
    
  );
}

export default Container;
