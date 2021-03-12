// import "./App.css";
// import Signup from "./components/Signup";
import React from "react";
// import NavBar from "./components/NavBar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Podcasts from "./components/Podcasts";
import SearchBar from "./components/SearchBar";
import VerticalNavBar from "./components/VerticalNavBar";

function App() {
  return (
    <div className="app-container">
      <Router>
        <VerticalNavBar />
        {/* <NavBar /> */}
        {/* <Signup /> */}
        <div className="side-content-container">
          <SearchBar />
          <Podcasts />
        </div>
        <Route exact path="/Library" component={SearchBar} />
      </Router>
    </div>
  );
}

export default App;
