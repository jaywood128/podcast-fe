import React from "react";
import { Component } from "react";
import AuthService from "../services/auth.service";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import UserService from "../services/user.service";

class HomeNavBar extends Component {
  render() {
    const logout = () => {
      AuthService.logout();
    };

    const renderAuthButton = () => {
      if (UserService.isAuth()) {
        return (
          <>
            <i className="fas fa-podcast fa-5x"></i>
            <Navbar bg="dark" variant="dark" activekey="/home">
              <Navbar.Brand href="/">
                <img
                  className="fas fa-podcast fa-5x"
                  style={{
                    color: "#fc8eac !important",
                    "margin-left": "100px",
                  }}
                ></img>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link
                    style={{ "margin-left": "700px" }}
                    href="/signout"
                    onClick={logout}
                  >
                    Log out
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </>
        );
      } else {
        return (
          <>
            {/* <div className="home-nav-container"> */}
            <i className="fas fa-podcast fa-5x"></i>
            <Navbar
              bg="dark"
              variant="dark"
              activeKey="/home"
              // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
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
                  <Nav.Link href="/signin">Log-in</Nav.Link>
                  <Nav.Link href="/signup">Sign up</Nav.Link>
                  {/* <Nav.Link href="/signout" onClick={logout}>
                    Log out
                  </Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {/* </div> */}
          </>
        );
      }
    };

    return <div className="home-navbar-container">{renderAuthButton()}</div>;
  }
}
export default HomeNavBar;
