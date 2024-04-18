import React from "react";
import styled from "styled-components";
import { Button } from "../../../../../components/Button";
import { theme } from "../../../../../styles/Theme";

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
  min-height: 524px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0px 6px 64px 0px rgba(112, 144, 176, 0.1);

  &:not(:last-child) {
    margin-bottom: 80px;

    @media ${theme.media.mobile} {
      margin-bottom: 50px;
    }
  }
  
  &:nth-child(2) img {
    order: -2; 
  }

  @media ${theme.media.mobile} {
      flex-direction: column-reverse;
      min-width: 345px;
      height: 1047px;


      &:nth-child(2) img {
        order: 0; 
  }
    }
`

const ProjectImage = styled.img`
  max-width: 496px;
  width: 50%;
  height: 524px;
  object-fit: cover;
  object-position: center; 

  @media ${theme.media.mobile} {
    width: 100%;
  }
`

const ProjectText = styled.div`
  height: 100%;
  padding: 0 39px 0 50px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  background-color: ${theme.colors.secondaryBg};

  @media ${theme.media.mobile} {
    height: 50%;
    padding: 0 27px 0 35px;
  }

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

