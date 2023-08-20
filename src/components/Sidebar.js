import React from "react";
import "../assets/scss/sidebar.scss";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/images/home.png";
import SettingsIcon from "../assets/images/settings.png";
import UserImg from "../assets/images/user.jpg";
import MessageIcon from "../assets/images/message.png";
import CarIcon from "../assets/images/car.png";
import AccountIcon from "../assets/images/account.png";

const Sidebar = ({ show }) => {
  return (
    <div className={!show ? "sidebar" : "sidebar d-block"}>
      <div className="navigation">
        <div>
          <ul>
            <li className="active">
              <Link to="/">
                <img src={HomeIcon} alt="home" /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={CarIcon} alt="car" /> <span>Car</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={AccountIcon} alt="account" /> <span>Account</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={MessageIcon} alt="message" /> <span>Message</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={SettingsIcon} alt="settings" /> <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-footer">
          <Link to="#">
            <img src={UserImg} alt="user" className="img-fluid" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
