import styled from "styled-components";
import headerpic from "./../../../images/headerpic.jpg";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 600px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${headerpic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 3.4rem;
  color: white;
  font-family: "Raleway", sans-serif;
  margin-top: 50px;
`;

export const HeaderDesc = styled.span`
  font-size: 1.75rem;
  color: white;
  margin-top: 10px;
`;
