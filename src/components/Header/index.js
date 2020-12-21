import React from "react";
import {
  HeaderContainer,
  HeaderWarning,
  HeaderWarningText,
  HeaderWarningButton,
  HeaderContainerText,
  HeaderContainerTextInner,
  HeaderWrapper,
  HeaderGuide,
  HeaderGuideMenu,
  HeaderGuideItem,
  HeaderGuideTitle,
  HeaderGuideDesc,
  HeaderGuideButton,
  HeaderGuideSeperator,
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
        <HeaderWrapper>
          <HeaderContainerText>
            During tragic time, we will be here for you!
            <span>
              <HeaderContainerTextInner>
                24/7 Life-changing care.
              </HeaderContainerTextInner>
            </span>
          </HeaderContainerText>
        </HeaderWrapper>
        <HeaderGuide>
          <HeaderGuideMenu>
            <HeaderGuideItem>
              <HeaderGuideTitle>Doctors & Staffs</HeaderGuideTitle>
              <HeaderGuideDesc>
                All doctors and staff take upmost care for each individual.
              </HeaderGuideDesc>
              <HeaderGuideButton>Doctors</HeaderGuideButton>
            </HeaderGuideItem>
            <HeaderGuideSeperator />
            <HeaderGuideItem>
              <HeaderGuideTitle>Locations </HeaderGuideTitle>
              <HeaderGuideDesc>
                We are located in the heart of Nashville, Tennessee. To find
                directions click below!
              </HeaderGuideDesc>
              <HeaderGuideButton>Directions</HeaderGuideButton>
            </HeaderGuideItem>
            <HeaderGuideSeperator />

            <HeaderGuideItem>
              <HeaderGuideTitle>Visitor Guide</HeaderGuideTitle>
              <HeaderGuideDesc>
                During coronavirus, rules and regulations has been changed.
              </HeaderGuideDesc>
              <HeaderGuideButton>Learn More</HeaderGuideButton>
            </HeaderGuideItem>
            <HeaderGuideSeperator />

            <HeaderGuideItem>
              <HeaderGuideTitle>Schedule an Appointment</HeaderGuideTitle>
              <HeaderGuideButton>Appointment</HeaderGuideButton>
            </HeaderGuideItem>
          </HeaderGuideMenu>
        </HeaderGuide>
      </HeaderContainer>
    </>
  );
};

export default Header;
