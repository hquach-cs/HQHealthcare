import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogoLeft,
  NavMenu,
  NavItem,
  NavLinkS,
  NavLinkR,
} from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavLogoLeft>HQ</NavLogoLeft>Care
          </NavLogo>
        </NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLinkR to="/resources">Resources</NavLinkR>
          </NavItem>
          <NavItem>
            <NavLinkS to="about">About Us</NavLinkS>
          </NavItem>
          <NavItem>
            <NavLinkR to="/careers">Careers</NavLinkR>
          </NavItem>
          <NavItem>
            <NavLinkS to="contact">Contact</NavLinkS>
          </NavItem>
          <NavItem>
            <NavLinkR to="/login">Log In</NavLinkR>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
