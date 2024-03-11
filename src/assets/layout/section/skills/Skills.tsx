import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper wrap={"wrap"}>
        <Skill iconId={"vscode"} width={"112"} height={"112"} viewBox={"0 0 112 112"}/>
        <Skill iconId={"js"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
        <Skill iconId={"css"} width={"120"} height={"119"} viewBox={"0 0 120 119"}/>
        <Skill iconId={"html"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
        <Skill iconId={"greensock"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
        <Skill iconId={"vector"} width={"105"} height={"100"} viewBox={"0 0 105 100"}/>
        <Skill iconId={"github"} width={"88"} height={"86"} viewBox={"0 0 88 86"}/>
        <Skill iconId={"git"} width={"105"} height={"105"} viewBox={"0 0 105 105"}/>
        <Skill iconId={"react"} width={"113"} height={"101"} viewBox={"0 0 113 101"}/>
        <Skill iconId={"sass"} width={"117"} height={"87"} viewBox={"0 0 117 87"}/>
        <Skill iconId={"bootstrap"} width={"88"} height={"87"} viewBox={"0 0 88 87"}/>
        <Skill iconId={"tailwind"} width={"131"} height={"131"} viewBox={"0 0 131 131"}/>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 519px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
`