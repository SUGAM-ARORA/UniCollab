import React, { useEffect, useState } from "react";
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
  FaCreativeCommons,
  FaBlog,
  FaSave,
  FaList,
} from "react-icons/fa";

function Menu() {

  let toggle = false;

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

  const showDropDown = () => {
    if(!toggle){
      document.getElementById("mainMenu").style.display = "flex";
      document.getElementById("lastMenu").style.display = "flex";
      toggle = true;
    } else{
      document.getElementById("mainMenu").style.display = "none";
      document.getElementById("lastMenu").style.display = "none";
      toggle = false;
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 524);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 524);
    };

    window.addEventListener('resize', handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <menu className="fromLeft">
    <Link href='/'>
      <img src={logo} alt='icon' className="logo" id='logo' onClick={isMobile ? showDropDown : null}
        style={{ cursor: isMobile ? 'pointer' : 'default' }}/>
    </Link>

      <ul className="fromTop" id="mainMenu">
        <Icon icon={<FaList />} tooltip="My projects" href="/projects"/>
        <Icon icon={<FaDelicious />} tooltip="Delicious" href="/" />
        <Icon icon={<FaShoppingCart />} tooltip="Cart" href="/cart" />
        <Icon icon={<FaWallet />} tooltip="Wallet" href="/" />
        <Icon icon={<FaChartLine />} tooltip="Trending" href="/" />
        <Icon icon={<FaRegClock />} tooltip="Speed" href="/" />
      </ul>

      <ul className='lastMenu' id='lastMenu'>
        <Link to='/settings'>
          <Icon icon={<FaCog />} tooltip='Settings' />
        </Link>
        <Icon icon={<FaSignOutAlt />} tooltip='Sign Out' href='/' />
      </ul>
    </menu>
  );
}

const Icon = ({ icon, tooltip, href }) => (
  <li>
    <a href={href}>
      {icon}
      <span className='tooltip'>{tooltip}</span>
    </a>
  </li>
);

export default Menu;