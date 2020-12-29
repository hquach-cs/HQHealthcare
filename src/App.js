import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Warning from "./components/WarningBar";
function App() {
  return (
    <Router>
      <Warning />
      <Navbar />
    </Router>
  );
}

export default App;
