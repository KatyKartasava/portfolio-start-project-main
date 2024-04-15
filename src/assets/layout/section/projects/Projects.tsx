import React from "react";
import { SectionTitle } from "../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import styled from "styled-components";
import { Project } from "./project/Project";
import Img1 from "./../../../images/proj-1.png";
import Img2 from "./../../../images/proj-2.png";
import Img3 from "./../../../images/proj-3.png";
import { Container } from "../../../../components/Container";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper justify={"center"} wrap={"wrap"} gap={"80px"}>
          <Project title={"Project Name"}
                  description={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."}
                  src={Img1} ></Project>
          <Project title={"Project Name"}
                  description={"What was your role, your deliverables, if the project was personal, freelancing."}
                  src={Img2}></Project>
          <Project title={"Project Name"}
                  description={"You can also add in this description the type of the project, if it was for web, mobile, electron."}
                  src={Img3}></Project>
        </FlexWrapper>
      </Container>
    </StyledProjects>  
  );
};

const StyledProjects = styled.section` 
   
`