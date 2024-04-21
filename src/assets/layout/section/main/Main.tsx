import React from 'react';
import styled from 'styled-components';
import photo1 from '../../../images/main-image-desctop.webp';
import photo2 from '../../../images/main-image-mobile.webp';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/Button';
import { theme } from '../../../../styles/Theme';
import { Container } from '../../../../components/Container';
import { font } from '../../../../styles/Common';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <GridWrapper>
          <TextBlock>
            <MainTitle>
              <p>Software Developer</p>
              <Typewriter
                options={{
                strings: ['Software Developer'],
                autoStart: true,
                loop: true,
                delay: 150
                }}
              />
            </MainTitle>
            <Name>Hello,  my name is Vahid Navazan</Name>
            <Description>Short text with details about you, what you do or your professional career. You can add more information on the about page.</Description>
            <ButtonBlock>
              <Button primary as="a" href="#projects">Projects</Button>
              <Button secondary as="a">LinkedIn</Button>
            </ButtonBlock>
          </TextBlock>
          <Tilt>
            <PhotoBlock>
              <Photo src={photo1} alt='Vahid Navazan'/>
            </PhotoBlock>
          </Tilt>    
        </GridWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`
const GridWrapper = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "text photo";

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "photo"
                          "text";
  }
`

const TextBlock = styled.div`
  max-width: 508px;
  width: 100%;
  grid-area: text;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${theme.media.tablet} {
    margin-top: 16px;
  }
`

const MainTitle =styled.h1`
  color: ${theme.colors.accent};
  font-size: 20px;
  line-height: 27px;
  text-align: left;
  text-transform: uppercase;

  p {
    display: none;
  }
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

  @media ${theme.media.tablet} {
    padding-right: 0;
  }
`

const ButtonBlock = styled.div`
  display: flex;
`

const PhotoBlock = styled.div`
  grid-area: photo;
  z-index: -1;
`

const Photo = styled.img`
  object-fit: cover;
  max-width: 720px;
  min-height: 629px;
  object-position: 0px 0px;
  width: 100%;
  
  overflow: visible;

  @media ${theme.media.tablet} {
    object-position: -15px -56px;
  }

  @media ${theme.media.mobile} {
    max-width: 486px;
    min-height: 415px;
    object-position: -15px 0px;
  }
` 

