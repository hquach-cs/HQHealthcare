import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const StoryContainer = styled.div`
  min-height: 500px;
  width: 100%;
  background: #f8f8f2;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const StoryHeader = styled.h1`
  font-size: 30px;
  text-align: center;
  font-weight: normal;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const StorySubtext = styled.div`
  width: 60%;
  text-align: center;
  margin-top: 15px;
`;

export const StoryWrappers = styled.div``;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
