import React from "react";
import "./Header.css";
import { FaChartLine, FaHome, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";

const Header = (props) => {
  return (
    <header>
      <div className="container heading">
        <div className="home">
          <Link to="/mycoins">
            <FaHome className="icon" />
          </Link>
        </div>
        <div className="logo">
          <FaChartLine className="icon" />
          <h1>
            my<span className="purple">Coins</span>
          </h1>
        </div>
        <div className="switch">
          <label> 
            {props.theme === "light" ? <FaMoon className="moon"/> : <FaSun className="sun"/>}
            <ReactSwitch 
              onChange={props.toggleTheme} 
              checked={props.theme === "light"} 
              onColor="#0D1421"
              offColor="#E5E4E2"
              offHandleColor="#a9a9a9"
              onHandleColor="#a9a9a9"
            />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
