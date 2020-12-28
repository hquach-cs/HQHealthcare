import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import StorySection from "./components/StorySection";
function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Header />
        <StorySection />
        <Footer />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
    </Router>
  );
}

export default App;
