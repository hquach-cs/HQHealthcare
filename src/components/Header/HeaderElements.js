import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

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
  padding: 5px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    background: white;
    color: red;
  }
`;

export const HeaderContainer = styled.div`
  background: black;
  width: 100%;
  height: 400px;
`;
