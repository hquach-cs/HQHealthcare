import React from "react";
import bookpic from "./../../images/bookpic.jpg";
import healthcarepic from "./../../images/healthcarepic.jpg";
import sciencepic from "./../../images/sciencepic.jpg";
import vaccinepic from "./../../images/vaccinetake.jpg";

import {
  StoryContainer,
  StoryHeader,
  StorySubtext,
  StoryWrappers,
  Wrapper,
  Story,
  StoryPic,
  StoryDesc,
  StoryTitle,
} from "./StoryElements";

const StorySection = () => {
  return (
    <StoryContainer>
      <Wrapper>
        <StoryHeader>
          During unexpected time, its best to keep{" "}
          <span style={{ display: "block" }}> up with breaking news!</span>
        </StoryHeader>
      </Wrapper>
      <Wrapper>
        <StorySubtext>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros
          augue, finibus sit amet turpis id, ullamcorper ornare velit. Proin
          aliquet consequat est accumsan efficitur. Sed nulla elit, viverra
          rutrum nisi quis, sagittis feugiat arcu. Proin in faucibus erat. Donec
          faucibus consectetur nibh a gravida. Curabitur mattis commodo orci, ut
          fringilla tellus scelerisque sit amet.
        </StorySubtext>
      </Wrapper>
      <StoryWrappers>
        <Story>
          <StoryPic src={sciencepic}></StoryPic>
          <StoryTitle>New science methods</StoryTitle>
          <StoryDesc>
            Curabitur mattis commodo orci, ut fringilla tellus scelerisque sit
            amet
          </StoryDesc>
        </Story>
        <Story>
          <StoryPic src={healthcarepic}></StoryPic>
          <StoryTitle>Healthcare Rising</StoryTitle>
          <StoryDesc>
            Curabitur mattis commodo orci, ut fringilla tellus scelerisque sit
            amet
          </StoryDesc>
        </Story>
        <Story>
          {" "}
          <StoryPic src={vaccinepic}></StoryPic>
          <StoryTitle>New Vaccine!</StoryTitle>
          <StoryDesc>
            Curabitur mattis commodo orci, ut fringilla tellus scelerisque sit
            amet
          </StoryDesc>
        </Story>
      </StoryWrappers>
    </StoryContainer>
  );
};

export default StorySection;
