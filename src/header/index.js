import React from "react";
import style from "./style.module.css";
import images from "../images/logo.png";

const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <img src={images} />
      <ul className={style.navBar}>
        <li>Home</li>
        <li>About</li>
        <li>Users</li>
        <li>Benefit</li>
        <li>Pricing</li>
      </ul>
    </div>
  );
};

Header.propTypes = {};

export default Header;
