import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Warning from "./components/WarningBar";
import Frontpage from "./components/Frontpage";

function App() {
  return (
    <Router>
      <Warning />
      <Navbar />
      <Route exact path="/">
        <Frontpage></Frontpage>
      </Route>
    </Router>
  );
}

export default App;
