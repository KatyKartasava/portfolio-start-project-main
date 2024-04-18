import React from 'react';
import styled from 'styled-components';
import photo1 from '../../../images/image.png';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/Button';
import { theme } from '../../../../styles/Theme';
import { Container } from '../../../../components/Container';

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
          <PhotoBlock>
            <Photo src={photo1} alt='Vahid Navazan'/>
            {/* <svg width="0" height="0">
	            <clipPath id="yellowBg">
		            <path d="M425.75 0.66C525.01 5.37 629.41 42.26 690.01 119.05C746.05 190.06 708.4 290.88 724.4 379.11C737.27 450.04 785.3 512.96 774.4 584.2C762.33 663.13 723.84 738.45 661.53 790.18C596.27 844.36 509.83 889.89 425.75 873.67C344.26 857.94 318.87 754.82 249.24 710.63C173.06 662.28 40.25 688.78 5.43 606.91C-28.69 526.71 82.95 456.25 105.3 372.2C130.06 279.1 78.6 166.63 142.09 93.02C207.86 16.76 323.68 -4.19 425.75 0.66Z" fill="#FDC435"/>
              </clipPath>
            </svg> */}
          </PhotoBlock>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`

const TextBlock = styled.div`
  max-width: 508px;
  width: 100%;
`

const MainTitle =styled.h1`
  color: ${theme.colors.accent};
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
  padding-top: 12px;
`

const Description = styled.p`
  font-size: 24px;
  line-height: 36px;
  text-align: left;
  padding-right: 22px;
  margin: 32px 0;
`
const PhotoBlock = styled.div`
  position: relative;
  top: 0;
  right: -10%;
`

const Photo = styled.img`
  width: 720px;
  height: 629px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 486px;
    height: 550px;
  }

  /* clip-path: url(#yellowBg);
  clip-path: path('M425.75 0.66C525.01 5.37 629.41 42.26 690.01 119.05C746.05 190.06 708.4 290.88 724.4 379.11C737.27 450.04 785.3 512.96 774.4 584.2C762.33 663.13 723.84 738.45 661.53 790.18C596.27 844.36 509.83 889.89 425.75 873.67C344.26 857.94 318.87 754.82 249.24 710.63C173.06 662.28 40.25 688.78 5.43 606.91C-28.69 526.71 82.95 456.25 105.3 372.2C130.06 279.1 78.6 166.63 142.09 93.02C207.86 16.76 323.68 -4.19 425.75 0.66Z');
  background-color: #FDC435; */
`

