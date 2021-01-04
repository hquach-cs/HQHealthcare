import React from "react";
import Header from "./Header";
import HeaderChoiceSec from "./HeaderChoice";
import StorySec from "./StorySec";
import AboutSec from "./AboutSection";

const Frontpage = () => {
  return (
    <>
      <Header></Header>
      <HeaderChoiceSec></HeaderChoiceSec>
      <StorySec></StorySec>
      <AboutSec></AboutSec>
    </>
  );
};

export default Frontpage;
