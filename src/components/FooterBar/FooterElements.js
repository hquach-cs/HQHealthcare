import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #242424;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

export const FooterSec = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: white;
`;

export const FooterTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const FooterInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
`;

export const FooterInput = styled.input`
  border-radius: 2px;
  outline: none;
  border: none;
  font-size: 18px;
  margin-bottom: 16px;
  border: 1px solid white;
  padding: 5px 10px;
`;

export const FooterButton = styled.button`
  width: 50%;
  align-self: center;
  padding: 8px 20px;
  border-radius: 2px;
  border: 1px solid white;
  background: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const FooterLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
  }
`;

export const FooterLinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  color: white;
  display: inline;
  border-bottom: 1px solid white;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 14px;
  cursor: pointer;
`;
