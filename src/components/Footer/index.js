import React from "react";
import {
  FooterContainer,
  FooterMenu,
  FooterItem,
  FooterTitle,
  InnerFooterMenu,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterMenu>
          <FooterItem>
            <FooterTitle>Actions</FooterTitle>
            <InnerFooterMenu>
              <li>Appointments & Access</li>
              <li>Pay Your Bill</li>
              <li>Financial Assistance</li>
              <li>Accepted Insurance</li>
              <li>Make a Donation</li>
              <li>Financial Assistance</li>
            </InnerFooterMenu>
          </FooterItem>
          <FooterItem>
            <FooterTitle>About HQCare</FooterTitle>
            <InnerFooterMenu>
              <li>About Us</li>
              <li>Location</li>
              <li>Quality & Patient Safety</li>
              <li>Resource for Medical Professional</li>
              <li>Careers</li>
              <li>For Employees</li>
            </InnerFooterMenu>
          </FooterItem>
          <FooterItem>
            <FooterTitle>Policy & Procedures</FooterTitle>
            <InnerFooterMenu>
              <li>
                *Any use of this site constitutes your agreement to the Terms
                and Conditions and Privacy Policy.*
              </li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Notice of Privacy Practices</li>
            </InnerFooterMenu>
          </FooterItem>
          <FooterItem>
            <FooterTitle>Links</FooterTitle>
            <InnerFooterMenu></InnerFooterMenu>
          </FooterItem>
        </FooterMenu>
      </FooterContainer>
    </>
  );
};

export default Footer;
