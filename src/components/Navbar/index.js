import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import styled from "styled-components";

import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${"" /* background: rgba(0, 0, 0, 0.5); */}
  backdrop-filter: blur(5px); /* Adjust the blur amount as needed */
  z-index: 999; /* Ensure the backdrop is above other elements */
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <Span>Afaaqahamed Jamadar</Span>
          </a>
        </NavLogo>

        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>

        {isOpen && (
          <>
            <MobileMenuWrapper
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
            <MobileMenu isOpen={isOpen}>
              <MobileLink
                href="#about"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                About
              </MobileLink>

              <MobileLink
                href="#skills"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Skills
              </MobileLink>

              <MobileLink
                href="#projects"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Projects
              </MobileLink>

              <MobileLink
                href="#education"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Education
              </MobileLink>

              <MobileLink
                href="#contact"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Contact
              </MobileLink>

              <GitHubButton
                style={{
                  padding: "10px 16px",
                  background: `${theme.primary}`,
                  color: "white",
                  width: "max-content",
                }}
                href={Bio.github}
                target="_blank"
              >
                Github Profile
              </GitHubButton>
            </MobileMenu>
          </>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
