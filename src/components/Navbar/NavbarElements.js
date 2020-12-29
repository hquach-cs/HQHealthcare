import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  /* background: #000; */
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  align-items: center;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #000;
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
`;

export const NavLogoLeft = styled.span`
  color: #d62839;
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
    color: #d62839;
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
    color: #d62839;
  }
`;

export const NavItemButton = styled.li`
  height: 40px;
  border: 2px solid #d62839;
  background: #d62839;
  border-radius: 5px;
  transition: 0.2 all ease-in-out;
  margin-left: 20px;
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
