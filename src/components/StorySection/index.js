import React from "react";

import {
  StoryContainer,
  StoryHeader,
  StorySubtext,
  StoryWrappers,
  Wrapper,
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
      <StoryWrappers></StoryWrappers>
    </StoryContainer>
  );
};

export default StorySection;
