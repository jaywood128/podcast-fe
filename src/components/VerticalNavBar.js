import React from "react";

const VerticalNavBar = () => {
  return (
    <div>
      <form className="form-inline">
        <input placeholder="SEARCH" />
        <button type="submit"></button>
      </form>
      <div>
        <ul>
          <li>Home</li>
          <li>Library</li>
          <li>Explore</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default VerticalNavBar;
