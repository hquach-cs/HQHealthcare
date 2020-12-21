import React from "react";
import {
  HeaderContainer,
  HeaderWarning,
  HeaderWarningText,
  HeaderWarningButton,
} from "./HeaderElements";

const Header = () => {
  return (
    <>
      <HeaderWarning>
        <HeaderWarningText>
          CORONAVIRUS: DELAYS FOR CERTAIN SURGERIES AND CHECK UP, VISITOR
          RESTRICTIONS!
          <HeaderWarningButton>Learn More!</HeaderWarningButton>
        </HeaderWarningText>
      </HeaderWarning>
      <HeaderContainer></HeaderContainer>
    </>
  );
};

export default Header;
