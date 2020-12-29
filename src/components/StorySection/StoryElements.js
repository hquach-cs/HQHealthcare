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

export const StoryWrappers = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StoryPic = styled.img`
  width: 90%;
  height: 65%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  transition: 0.7s all ease-in;
`;

export const StoryTitle = styled.h1`
  font-size: 24px;
  padding: 5px;
`;

export const StoryDesc = styled.span`
  padding-top: 10px;
`;

export const Story = styled.a`
  background: white;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  &:hover {
    ${StoryPic} {
      transform: scale(1.05);
    }
  }
  cursor: pointer;
`;
