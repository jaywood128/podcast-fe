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
    <div className="App">
      <div className="app-container">
        <Router>
          <VerticalNavBar />
          <SearchBar />
          {/* <NavBar /> */}
          {/* <Signup /> */}
          <Podcasts />
          <main>
            <Route exact path="/Library" component={Podcasts} />
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
