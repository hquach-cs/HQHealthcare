import React from "react";
import {
  HeaderContainer,
  HeaderWarning,
  HeaderWarningText,
  HeaderWarningButton,
  HeaderContainerText,
  HeaderContainerTextInner,
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
      <HeaderContainer>
        <HeaderContainerText>
          During tragic time, we will be here for you!
          <span>
            <HeaderContainerTextInner>
              Life-changing and everyday care.
            </HeaderContainerTextInner>
          </span>
        </HeaderContainerText>
      </HeaderContainer>
    </>
  );
};

export default Header;
