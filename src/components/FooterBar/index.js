import React from "react";

import {
  FooterContainer,
  FooterSec,
  FooterTitle,
  FooterText,
  FooterInputContainer,
  FooterInput,
  FooterButton,
  FooterLinks,
  FooterLinkWrapper,
  FooterLinkList,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const FooterBar = () => {
  return (
    <FooterContainer>
      <FooterSec>
        <FooterTitle>
          Join the HQCare Newsletter to receive our breaking news and breaking
          deals
        </FooterTitle>
        <FooterText>You can unsubscribe at any time.</FooterText>
        <FooterInputContainer>
          <FooterInput></FooterInput>
          <FooterButton>Subscribe</FooterButton>
        </FooterInputContainer>
      </FooterSec>
      <FooterLinks>
        <FooterLinkWrapper>
          <FooterLinkList>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink>How it works</FooterLink>
            <FooterLink>Testimonials</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Investors</FooterLink>
            <FooterLink>Term of Service</FooterLink>
          </FooterLinkList>
          <FooterLinkList>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink>Contact</FooterLink>
            <FooterLink>Support</FooterLink>
            <FooterLink>Locations</FooterLink>
            <FooterLink>Sponsorships</FooterLink>
          </FooterLinkList>
          <FooterLinkList>
            <FooterLinkTitle>News/Stories</FooterLinkTitle>
            <FooterLink>Breaking News</FooterLink>
            <FooterLink>Submit News</FooterLink>
            <FooterLink>Agency</FooterLink>
            <FooterLink>Influencer</FooterLink>
          </FooterLinkList>
          <FooterLinkList>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink>Instragram</FooterLink>
            <FooterLink>Facebook</FooterLink>
            <FooterLink>Youtube</FooterLink>
            <FooterLink>Twitter</FooterLink>
          </FooterLinkList>
        </FooterLinkWrapper>
      </FooterLinks>
    </FooterContainer>
  );
};

export default FooterBar;
