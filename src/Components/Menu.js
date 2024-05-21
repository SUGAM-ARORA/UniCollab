import React, { useEffect } from "react";
import "./Menu.css";
import logo from "../img/logo.png";
import React, { useEffect } from "react";
import "./Menu.css";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
      <img src={logo} alt="logo" />

      <ul id="mainMenu">
        <Icon icon={<FaDelicious />} onClick={() => navigate('/delicious')} />
        <Icon icon={<FaShoppingCart />} onClick={() => navigate('/cart')} />
        <Icon icon={<FaWallet />} onClick={() => navigate('/wallet')} />
        <Icon icon={<FaChartLine />} onClick={() => navigate('/chart')} />
        <Icon icon={<FaRegClock />} onClick={() => navigate('/clock')} />
      </ul>

      <ul className="lastMenu">
        <Icon icon={<FaCog />} onClick={() => navigate('/settings')} />
        <Icon icon={<FaSignOutAlt />} onClick={() => navigate('/logout')} />
      </ul>
    </menu>
  );
}

const Icon = ({ icon, onClick }) => (
  <li onClick={onClick}>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;
