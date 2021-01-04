import React from "react";

import {
  About,
  AboutInfo,
  Img,
  AboutTitle,
  AboutSubtitle,
  AboutDesc,
} from "./AboutElements";
import svghc from "../../../images/svg-hc.svg";

const AboutSec = () => {
  return (
    <About name="about">
      <AboutInfo>
        <AboutTitle>Headquarters Healthcare</AboutTitle>
        <AboutSubtitle>About Us!</AboutSubtitle>
        <AboutDesc>
          This is a random site that I am creating to provide examples of my
          full-stack skills. My name is Henry Q. and I am the designer/developer
          of this website. I created this website using react.js and .NET.
        </AboutDesc>
      </AboutInfo>
      <Img src={svghc}></Img>
    </About>
  );
};

export default AboutSec;
