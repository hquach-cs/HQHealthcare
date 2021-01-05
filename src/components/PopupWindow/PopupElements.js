import styled from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Popup = styled.div`
  width: 400px;
  height: 400px;
  background: white;
  position: fixed;
  opacity: 1;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -45%);
  z-index: 9999;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const PopupClose = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background: red;
  border: none;
  margin: 5px;
  cursor: pointer;
`;

export const PopupTitle = styled.h1`
  text-align: center;
  margin-bottom: 6px;
  padding: 5px;
`;

export const PopupDesc = styled.p`
  padding: 10px;
`;
