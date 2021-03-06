import React from "react";
import { Link } from "react-router-dom";

const VerticalNavBar = () => {
  return (
    <div className="vertical-nav-bar-wrapper">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>
            {" "}
            <i className="fas fa-list"></i>
            <Link to="#">Shows</Link>
          </li>
          <li>
            <i className="fas fa-star"></i> <Link to="#">Favorites</Link>
          </li>
          <li>Explore</li>
        </ul>
      </div>
    </div>
  );
};

export default VerticalNavBar;
