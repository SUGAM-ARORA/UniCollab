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
    <menu>
      <img src={logo} alt="" />

      <ul id="mainMenu">
        <Icon icon={<FaDelicious />} tooltip="Delicious" />
        <Icon icon={<FaShoppingCart />} tooltip="Cart" />
        <Icon icon={<FaWallet />} tooltip="Wallet" />
        <Icon icon={<FaChartLine />} tooltip="Chart" />
        <Icon icon={<FaRegClock />} tooltip="Clock" />
      </ul>

      <ul className="lastMenu">
        <Link to="/settings">
          <Icon icon={<FaCog />} tooltip="Settings" />
        </Link>
        <Icon icon={<FaSignOutAlt />} tooltip="Sign Out" />
      </ul>
    </menu>
  );
}

const Icon = ({ icon, tooltip }) => (
  <li>
    <a href="#">
      {icon}
      <span className="tooltip">{tooltip}</span>
    </a>
  </li>
);

export default Menu;
