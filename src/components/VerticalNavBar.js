import React from "react";
import { Link } from "react-router-dom";

const VerticalNavBar = () => {
  return (
    <div className="vertical-nav-bar-wrapper">
      <div className="sidebar">
        <i
          className="fas fa-podcast fa-5x"
          style={{ color: "#b3b3b3", "margin-left": "100px" }}
        ></i>
        <h2>Sidebar</h2>
        <ul>
          <li>
            <i className="fas fa-home" style={{ color: "#b3b3b3" }}></i>{" "}
            <Link to="#">Home</Link>
          </li>
          <li>
            {" "}
            <i className="fas fa-list" style={{ color: "#b3b3b3" }}></i>
            <Link to="#" bsClass="link">
              Shows
            </Link>
          </li>
          <li>
            <i className="fas fa-star" style={{ color: "#b3b3b3" }}></i>{" "}
            <Link to="#">Favorites</Link>
          </li>
          <li>Explore</li>
        </ul>
      </div>
    </div>
  );
};

export default VerticalNavBar;
