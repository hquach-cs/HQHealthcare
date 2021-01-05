import styled from "styled-components";

export const About = styled.div`
  width: 100%;
  min-height: 500px;
  background: white;
  display: grid;
  grid-template-columns: 600px 500px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    text-align: center;
    margin-top: 20px;
  }
`;

export const AboutInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  text-decoration: underline;
  font-style: italic;
  font-size: 36px;
`;

export const AboutSubtitle = styled.h2`
  font-family: "Raleway", sans-serif;
  padding-top: 15px;
  color: #4ba3c3;
`;

export const AboutDesc = styled.span`
  padding-top: 15px;
`;

export const Img = styled.img`
  height: 300px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;
