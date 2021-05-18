// import "./App.css";
import React from "react";
// import NavBar from "./components/NavBar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Podcasts from "./components/Podcasts";
import VerticalNavBar from "./components/VerticalNavBar";

import HomePage from "./components/HomePage";
// import Podcast from "./components/Podcast";
import HomeNavBar from "./components/HomeNavBar";
// import Podcast from "./components/Podcast";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <HomeNavBar />
        <div className="side-content-container">
          {/* <SearchBar /> */}
          {/* <Podcasts /> */}
          <VerticalNavBar />
        </div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/library" component={Podcasts} />
        <Route exact path="/signin" component={SignIn} />
      </Router>
    </div>
  );
};
export default App;
