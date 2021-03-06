// import "./App.css";
// import Signup from "./components/Signup";
import React from "react";
import NavBar from "./components/NavBar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Podcasts from "./components/Podcasts";
// import VerticalNavBar from "./components/VerticalNavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <VerticalNavBar /> */}
          <NavBar />
          {/* <Signup /> */}
        </div>
        <main>
          <Route exact path="/Library" component={Podcasts} />
        </main>
      </Router>
    </div>
  );
}

export default App;
