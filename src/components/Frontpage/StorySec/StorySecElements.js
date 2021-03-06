import styled from "styled-components";

export const StorySection = styled.div`
  background: #f8f8f2;
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StorySectionTitle = styled.h1`
  margin-top: 5%;
  font-size: 2rem;
  font-style: italic;
  text-decoration: underline;
  text-align: center;
`;

export const StorySectionDesc = styled.span`
  margin-top: 30px;
  text-align: center;
  margin-bottom: 3%;
  width: 60%;
`;

export const StoryList = styled.ul`
  list-style: none;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  margin-bottom: 3%;
`;

export const StoryPic = styled.div`
  border: 1px solid rgba(242, 242, 230, 1);
`;

export const StoryTitle = styled.h1`
  font-size: 25px;
  text-align: center;
`;

export const StoryDesc = styled.span`
  font-size: 14px;
  padding: 4px;
  text-align: center;
`;

export const StoryButton = styled.a`
  cursor: pointer;
  text-align: center;
  color: #4ba3c3;
  font-size: 20px;
  &:hover {
    color: #cce6f4;
    text-decoration: underline;
  }
`;

export const Story = styled.li`
  width: 300px;
  height: 400px;
  background: white;
  margin: 10px;
  border: 1px solid rgba(242, 242, 230, 1);
  display: grid;
  grid-template-rows: 50% 10% 25%;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
