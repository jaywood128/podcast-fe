// import "./App.css";
import Signup from "./components/Signup";
import React from "react";
// import NavBar from "./components/NavBar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Podcasts from "./components/Podcasts";
import SearchBar from "./components/SearchBar";
// import VerticalNavBar from "./components/VerticalNavBar";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import HomeNavBar from "./components/HomeNavBar";

function App() {
  return (
    <div className="app-container">
      <Router>
        {/* <VerticalNavBar /> */}
        {/* <NavBar /> */}
        <HomeNavBar />
        <HomePage />
        <div className="side-content-container">
          {/* <SearchBar /> */}
          {/* <Podcasts /> */}
        </div>
        <Route exact path="/library" component={SearchBar} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/sign-in" component={SignIn} />
      </Router>
    </div>
  );
}

export default App;
