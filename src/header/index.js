import React from "react";
import style from "./style.module.css";
import images from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <img src={images} />
      <div className={style.navBar}>
        <NavLink className={style.active} to="/">
          Home
        </NavLink>
        <NavLink className={style.active} to="/about">
          About
        </NavLink>
        <NavLink className={style.active} to="/users">
          Users
        </NavLink>
        <NavLink className={style.active} to="/Albums">
          Albums
        </NavLink>
        <NavLink className={style.active} to="/benefit">
          Benefit
        </NavLink>
      </div>
    </div>
  );
};
Header.propTypes = {};

export default Header;
