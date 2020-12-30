import React from "react";
import {
  HeaderSection,
  HeaderChoice,
  HeaderSplit,
  HeaderChoiceTitle,
  HeaderChoiceDesc,
  HeaderChoiceButton,
  HeaderChoiceWrapper,
  HeaderChoiceButtonIcon,
} from "./HeaderChoiceElements";

const HeaderChoiceSec = () => {
  return (
    <HeaderSection>
      <HeaderChoice>
        <HeaderChoiceTitle>Doctors and Staff</HeaderChoiceTitle>
        <HeaderChoiceDesc>
          Choose by name, occupation, or location.
        </HeaderChoiceDesc>
        <HeaderChoiceWrapper>
          <HeaderChoiceButton>
            Find a Doctor
            <HeaderChoiceButtonIcon
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
            </HeaderChoiceButtonIcon>
          </HeaderChoiceButton>
        </HeaderChoiceWrapper>
      </HeaderChoice>
      <HeaderSplit></HeaderSplit>
      <HeaderChoice>
        <HeaderChoiceTitle>Locations</HeaderChoiceTitle>
        <HeaderChoiceDesc>Find maps and/or directions.</HeaderChoiceDesc>
        <HeaderChoiceWrapper>
          <HeaderChoiceButton>
            Locations
            <HeaderChoiceButtonIcon
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
            </HeaderChoiceButtonIcon>
          </HeaderChoiceButton>
        </HeaderChoiceWrapper>
      </HeaderChoice>
      <HeaderSplit></HeaderSplit>
      <HeaderChoice>
        <HeaderChoiceTitle>Appointments</HeaderChoiceTitle>
        <HeaderChoiceDesc>24/7 Healthcare Respondant</HeaderChoiceDesc>
        <HeaderChoiceWrapper>
          <HeaderChoiceButton>
            Appointment
            <HeaderChoiceButtonIcon
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
            </HeaderChoiceButtonIcon>
          </HeaderChoiceButton>
        </HeaderChoiceWrapper>
      </HeaderChoice>
    </HeaderSection>
  );
};

export default HeaderChoiceSec;
