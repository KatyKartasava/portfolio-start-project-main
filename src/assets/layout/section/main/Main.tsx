import React from 'react';
import styled from 'styled-components';
import photo1 from '../../../images/image.png';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/Button';
import { theme } from '../../../../styles/Theme';
import { Container } from '../../../../components/Container';
import { font } from '../../../../styles/Common';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
            <TextBlock>
              <MainTitle>Software Developer</MainTitle>
              <Name>Hello,  my name is Vahid Navazan</Name>
              <Description>Short text with details about you, what you do or your professional career. You can add more information on the about page.</Description>
              <Button primary>Projects</Button>
              <Button secondary>LinkedIn</Button>
            </TextBlock>
            
              <Photo src={photo1} alt='Vahid Navazan'/>
            
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`
// const MainBlock = styled.div`
//   display: flex;

//   width: 100%;

//   @media ${theme.media.tablet} {
//     display: flex;
//     flex-direction: column-reverse;
//     justify-content: center;
//     align-items: center;
//   }
// `

const TextBlock = styled.div`
  max-width: 508px;
  width: 50%;

  @media ${theme.media.tablet} {
    width: 100%;
  }
  
`

const MainTitle =styled.h1`
  color: ${theme.colors.accent};
  font-size: 20px;
  line-height: 27px;
  text-align: left;
  text-transform: uppercase;
`

const Name = styled.h2`
  ${font({family: "'Roboto', sans-serif", weight: 700, Fmax: 64, Fmin: 42})};
  color: ${theme.colors.fontH};
  line-height: 120%;
  text-align: left;
  padding-top: 12px;
`

const Description = styled.p`
  font-size: 24px;
  line-height: 36px;
  text-align: left;
  padding-right: 22px;
  margin: 32px 0;
`
// const PhotoBlock = styled.div`
//   width: 50%;
//   position: relative;
//   top: 0;
//   bottom: 0;
//   right: 0;
  
//   @media ${theme.media.tablet} {
//     width: 100%;
//   }
// `

const Photo = styled.img`
  max-width: 720px;
  width: 100%;
  min-height: 629px;
  object-fit: cover;
  object-position: 10% 0px;
  overflow: visible;

  @media ${theme.media.tablet} {
    max-width: 486px;
    width: 100%;
    min-height: 394px;
    object-position: 0% 0%;
    order: -1;
    margin-bottom: 50px;
  }
`

