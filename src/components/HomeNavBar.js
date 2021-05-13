import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const HomeNavBar = () => {
  return (
    <>
      {/* <div className="home-nav-container"> */}
      <i className="fas fa-podcast fa-5x"></i>
      <Navbar
        bg="dark"
        variant="dark"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Navbar.Brand href="/">
          <img
            className="fas fa-podcast fa-5x"
            style={{ color: "#b3b3b3", "margin-left": "100px" }}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/sign-in">Log-in</Nav.Link>
            <Nav.Link href="sign-up">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* </div> */}
    </>
  );
};

export default HomeNavBar;
