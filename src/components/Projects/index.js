import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects, Bio } from "../../data/constants";
import styled from "styled-components";
import _default from "../../themes/default";

const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 40px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 24px;
  transition: all 0.4s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <br />
        <Title>Projects</Title>
        <Desc>
          I have worked on Embedded Projects and some Blockchain Based Projects.
          Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton value="all" onClick={() => setToggle("all")} />
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
      
        </CardContainer>
            <br />
        <GitHubButton href={Bio.github} target="_blank">
          Other Projects
        </GitHubButton>

      </Wrapper>
    </Container>
  );
};

export default Projects;
