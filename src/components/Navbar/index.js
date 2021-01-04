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
  NavLinkRButton,
  NavItemButton,
} from "./NavbarElements";
const Navbar = () => {
  return (
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
          <NavLinkS to="about" spy={true} smooth={true}>
            About Us
          </NavLinkS>
        </NavItem>
        <NavItem>
          <NavLinkR to="/careers">Careers</NavLinkR>
        </NavItem>
        <NavItem>
          <NavLinkS to="contact">Contact</NavLinkS>
        </NavItem>
        <NavItemButton>
          <NavLinkRButton to="/signin">Log In</NavLinkRButton>
        </NavItemButton>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
