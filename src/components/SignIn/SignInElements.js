import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const SignInContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -45%);
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const SignInWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  background: red;
  max-width: 400px;
  height: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  color: white;
`;

export const FormH1 = styled.h1`
  font-size: 30px;
`;

export const FormLabel = styled.label`
  margin-top: 15px;
`;

export const FormInput = styled.input`
  border: none;
  border-radius: 4px;
  height: 30px;
  font-size: 16px;
  margin-top: 5px;
  padding: 4px;
`;

export const FormButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormButton = styled.button`
  color: red;
  font-size: 16px;
  margin-top: 15px;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  width: 50%;
  cursor: pointer;
  margin-bottom: 20px;

  font-weight: bold;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    background: red;
    border: 2px solid white;
    color: white;
  }
`;

export const Text = styled.span`
  margin-top: 5px;
`;
