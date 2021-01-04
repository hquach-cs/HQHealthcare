import React from "react";

import {
  StorySection,
  StorySectionTitle,
  StorySectionDesc,
  StoryList,
  Story,
  StoryTitle,
  StoryPic,
  StoryDesc,
  StoryButton,
} from "./StorySecElements";

const StorySec = () => {
  return (
    <StorySection>
      <StorySectionTitle>Breaking News and Story!</StorySectionTitle>
      <StorySectionDesc>
        Duis ultricies condimentum dui vitae posuere. Suspendisse id purus
        metus. Duis aliquet consequat quam, quis auctor felis efficitur sed.
        Etiam nec diam euismod, elementum neque a, laoreet ipsum. Cras vel metus
        eu est sollicitudin egestas.
      </StorySectionDesc>
      <StoryList>
        <Story>
          <StoryPic></StoryPic>
          <StoryTitle>Vaccine Progression</StoryTitle>
          <StoryDesc>
            This article talks about the progression of the vaccine and the task
            it takes to deliever to millions.
          </StoryDesc>
          <StoryButton>Learn More!</StoryButton>
        </Story>
        <Story>
          <StoryPic></StoryPic>
          <StoryTitle>New HC Mandate</StoryTitle>
          <StoryDesc>
            With the pandemic, the mandate of new policy takes in place. This
            allows upmost saftey policy to be incorprated for better healthcare.
          </StoryDesc>
          <StoryButton>Learn More!</StoryButton>
        </Story>
        <Story>
          <StoryPic></StoryPic>
          <StoryTitle>Safety Policy</StoryTitle>
          <StoryDesc>
            Studies been done to showcase mask and washing hands help prevent
            spread of COVID-19. Wearing mask also is a mandatory for in-person
            safety.
          </StoryDesc>
          <StoryButton>Learn More!</StoryButton>
        </Story>
        <Story>
          <StoryPic></StoryPic>
          <StoryTitle>Upcoming 2021</StoryTitle>
          <StoryDesc>
            With the new year up ahead, new things are being tested and
            implemented. Click below to know more.
          </StoryDesc>
          <StoryButton>Learn More!</StoryButton>
        </Story>
      </StoryList>
    </StorySection>
  );
};

export default StorySec;
