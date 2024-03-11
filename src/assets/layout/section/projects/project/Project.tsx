import React from "react";
import styled from "styled-components";

type ProjectPropsType = {
  title: string
  description: string
  src: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <ProjectText>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectDescription>{props.description}</ProjectDescription>
        <ProjectLink href={"#"}>View Project</ProjectLink>
      </ProjectText>
      <ProjectImage src={props.src}></ProjectImage>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  max-width: 992px;
  width: 100%;
  border-radius: 24px;
  box-shadow: 0px 6px 64px 0px rgba(112, 144, 176, 0.1);
`

const ProjectImage = styled.img`
  height: 526px;
  max-width: 496px;
  object-fit: cover;
`

const ProjectText = styled.div`
width: 50%;
`

const ProjectTitle = styled.h3``

const ProjectDescription = styled.p``

const ProjectLink = styled.a``

