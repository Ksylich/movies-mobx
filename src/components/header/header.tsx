import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/icons/star.png";
import "./header.css";

const Header = () => (
  <div className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Smiley face" height={45} width={45} />
          <span> Movies</span>
        </Link>
      </div>
      <div className="navbar-brand" />

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                My Account
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <Link to="/favorites-page">
                  <button className="dropdown-item" type="button">Favorites</button>
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item" id="noactine">
            <Link to="/favorites-page">
              <span className="nav-link">Favorites</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>

);

export default Header;
