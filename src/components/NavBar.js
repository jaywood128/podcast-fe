import React from "react";
import Nav from "react-bootstrap/Nav";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <>
      <div className="search-bar-container">
        <div className="icon-container">
          <i className="fas fa-podcast fa-5x"></i>
        </div>
        <SearchBar />
      </div>
      <Nav
        bg="dark"
        variant="dark"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/library">Library</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Discover</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Favorites</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavBar;
