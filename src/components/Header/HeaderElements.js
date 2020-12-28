import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import HeaderPic from "./../../images/headerpic.jpg";

export const HeaderWarning = styled.div`
  width: 100%;
  height: 40px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderWarningText = styled.span`
  color: white;
  font-size: 16px;
`;

export const HeaderWarningButton = styled.div`
  border: 2px solid #dd0000;
  display: inline;
  border-radius: 5px;
  margin-left: 20px;
  padding: 3px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    background: white;
    color: red;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${HeaderPic});
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const HeaderContainerText = styled.h2`
  color: white;
  font-size: 45px;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 40px;
`;

export const HeaderContainerTextInner = styled.h2`
  color: white;
  font-size: 35px;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 20px;
  font-weight: normal;
`;

export const HeaderGuide = styled.div`
  width: 100%;
  height: 200px;
  background: red;
`;

export const HeaderGuideMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HeaderGuideItem = styled.li`
  width: 200px;
  height: 100%;
  border: black;
  background: #ee0000;
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 10px;
  color: white;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 15px;
  margin-right: 15px;
`;

export const HeaderGuideTitle = styled.h2`
  font-size: 1.5rem;
`;

export const HeaderGuideDesc = styled.span``;

export const HeaderGuideButton = styled.div`
  background: white;
  color: red;
  width: 70%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    background: red;
    border: 2px solid white;
    color: white;
  }
`;

export const HeaderGuideSeperator = styled.div`
  height: 60%;
  width: 1px;
  border: 1px solid white;
`;
