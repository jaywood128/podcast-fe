import React from "react";

const VerticalNavBar = () => {
  return (
    <div>
      <form class="form-inline">
        <input placeholder="SEARCH" />
        <button type="submit"></button>
      </form>
      <div>
        <h2>
          <span>Home</span>
        </h2>
        <h2>
          <span>Browse</span>Browse
        </h2>
        <h2>
          <span>Library</span> added content
        </h2>
      </div>
    </div>
  );
};

export default VerticalNavBar;
