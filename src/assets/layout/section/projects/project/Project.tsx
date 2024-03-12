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
  padding: 0px;
  max-width: 992px;
  width: 100%;
  margin-bottom: 80px;
  border-radius: 24px;
  box-shadow: 0px 6px 64px 0px rgba(112, 144, 176, 0.1);
`

const ProjectImage = styled.img`
  height: 526px;
  max-width: 496px;
  object-fit: cover;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  box-shadow: 0px 6px 64px 0px rgba(112, 144, 176, 0.1);
`

const ProjectText = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 50px;
  background-color: #ffffff;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  box-shadow: 0px 6px 64px 0px rgba(112, 144, 176, 0.1);

  a {
    box-sizing: border-box;
    border: 1px solid #25282b;
    border-radius: 24px;
    text-decoration: none;
    padding: 8px 24px;
  }
`

const ProjectTitle = styled.h3`
  color: #25282b;
  font-family: Playfair Display;
  font-size: 40px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0%;
`

const ProjectDescription = styled.p`
  color: #828282;
  font-family: Nunito;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0%;
`

