import React from "react";
import styled from "styled-components";
import { Button } from "../../../../../components/Button";

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
        <Button secondary as={"a"} href={"#"}>View Project</Button>
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

  max-width: 992px;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0px 6px 64px 0px rgba(112, 144, 176, 0.1);

  
  &:nth-child(2) img {
    order: -2;
    
  }
`

const ProjectImage = styled.img`
  height: 526px;
  max-width: 496px;
  width: 100%;
  object-fit: cover;
 
`

const ProjectText = styled.div`
  height: 100%;
  width: 100%;

  padding: 0 39px 0 50px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  background-color: #ffffff;

  

  a {
    border: 1px solid #25282b;
    border-radius: 24px;
    padding: 8px 24px;
  }
`

const ProjectTitle = styled.h3`
  font-family: Playfair Display;
  font-size: 40px;
  line-height: 150%;
`

const ProjectDescription = styled.p`
  font-family: Nunito;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  padding: 24px 0;
`

