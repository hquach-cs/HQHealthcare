import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Warning = styled.div`
  height: 40px;
  width: 100%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WarningText = styled.h1`
  color: white;
  font-size: 16px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const WarningButton = styled(LinkRouter)`
  margin-left: 15px;
  color: white;
  font-size: 14px;
  transition: 0.2s all ease-in-out;
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    color: #d62839;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.65rem;
    margin-left: 0;
  }
`;
