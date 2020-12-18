import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  /* background: #000; */
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLogoLeft = styled.span`
  color: red;
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinkS = styled(LinkScroll)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active,
  &:hover {
    color: red;
  }
`;

export const NavLinkR = styled(LinkRouter)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active,
  &:hover {
    color: red;
  }
`;

export const NavItemButton = styled.li`
  height: 40px;
  border: 2px solid red;
  background: red;
  border-radius: 5px;
  transition: 0.2 all ease-in-out;
`;

export const NavLinkRButton = styled(LinkRouter)`
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.25rem;
  height: 100%;
  cursor: pointer;
`;
