import React, { useEffect } from "react";
import "./Menu.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Menu() {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu className="fromLeft">
      <img src={logo} alt="" />

      <ul className="fromTop" id="mainMenu">
        <Icon icon={<FaDelicious />} href = "/"/>
        <Icon icon={<FaShoppingCart />} href = "/" />
        <Icon icon={<FaWallet />} href = "/"/>
        <Icon icon={<FaChartLine />} href = "/"/>
        <Icon icon={<FaRegClock />} href = "/"/>
      </ul>

      <ul className="lastMenu">
        <Icon icon={<FaCog />} href = "/"/>
        <Icon icon={<FaSignOutAlt />} href = "/"/>


      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;
