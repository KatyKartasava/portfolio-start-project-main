import React from 'react';
import styled from 'styled-components';
import photo from '../../../images/foto.png';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/Button';
import { theme } from '../../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"}>
        <TextBlock>
          <MainTitle>Software Developer</MainTitle>
          <Name>Hello,  my name is Vahid Navazan</Name>
          <Description>Short text with details about you, what you do or your professional career. You can add more information on the about page.</Description>
          <Button primary>Projects</Button>
          <Button secondary>LinkedIn</Button>
        </TextBlock>
        <Photo src={photo} alt='Foto Vahid Navazan'/>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  width: 100%;
  overflow: hidden;
  padding: 0 120px;
`

const TextBlock = styled.div`
  width: 508px;
  padding-top: 55px;
`

const MainTitle =styled.h1`
  color: ${theme.colors.accent};
  font-family: Nunito;
  font-size: 20px;
  line-height: 27px;
  text-align: left;
  text-transform: uppercase;
`

const Name = styled.h2`
  color: ${theme.colors.fontH};
  font-family: Roboto;
  font-size: 64px;
  line-height: 120%;
  text-align: left;
`

const Description = styled.p`
  font-size: 24px;
  line-height: 36px;
  text-align: left;
  padding-right: 22px;
`

const Photo = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`
