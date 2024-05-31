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
import toast from "react-hot-toast";

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
        <Icon icon={<FaDelicious />} tooltip="Delicious" href="/" />
        <Icon icon={<FaShoppingCart />} tooltip="Cart" href="/" />
        <Icon icon={<FaWallet />} tooltip="Wallet" href="/" />
        <Icon icon={<FaChartLine />} tooltip="Trending" href="/" />
        <Icon icon={<FaRegClock />} tooltip="Speed" href="/" />
      </ul>

      <ul className="lastMenu">
        <Link to="/settings">
          <Icon icon={<FaCog />} tooltip="Settings" />
        </Link>
        <div onClick={() => toast.success("Signed Out Successfully!")}>
          <Icon icon={<FaSignOutAlt />} tooltip="Sign Out" href="/" />
        </div>
      </ul>
    </menu>
  );
}

const Icon = ({ icon, tooltip, href }) => (
  <li>
    <a href={href}>
      {icon}
      <span className="tooltip">{tooltip}</span>
    </a>
  </li>
);

export default Menu;
