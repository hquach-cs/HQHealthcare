import styled from "styled-components";

export const HeaderSection = styled.div`
  width: 100%;
  background: rgb(214, 40, 57, 0.95);
  display: flex;
  height: 240px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 340px;
  }
`;

export const HeaderSplit = styled.div`
  height: 100%;
  width: 2px;
`;

export const HeaderChoice = styled.div`
  width: 300px;
  height: 100%;
  background: #d62839;
  display: grid;
  color: white;
  @media screen and (max-width: 768px) {
    padding: 5px;
    border-bottom: 1px solid white;
  }
`;

export const HeaderChoiceTitle = styled.h2`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-family: "Raleway", sans-serif;
  font-style: bold;
  text-decoration: underline;
`;

export const HeaderChoiceDesc = styled.span`
  text-align: center;
  font-size: 1rem;
`;

export const HeaderChoiceWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderChoiceButtonIcon = styled.svg`
  color: white;
  fill: #4ba3c3;
  transition: all 0.2s ease-in-out;
  padding-left: 5px;
  width: 20px;
  height: 20px;
`;

export const HeaderChoiceButton = styled.button`
  height: 40px;
  width: 50%;
  cursor: pointer;
  border-radius: 4px;
  padding: 5px 10px;
  font-family: "Raleway", sans-serif;
  color: #4ba3c3;
  border: none;
  font-size: 1rem;
  transition: all 0.25s ease-in-out;
  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
  }
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    ${HeaderChoiceButtonIcon} {
      transform: translateX(5px);
    }
  }
`;
