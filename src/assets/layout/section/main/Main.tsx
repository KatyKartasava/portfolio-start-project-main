import React from 'react';
import styled, { css } from 'styled-components';
import photo from '../../../images/foto.png';
import { FlexWrapper } from '../../../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"}>
        <TextBlock>
          <MainTitle>Software Developer</MainTitle>
          <Name>Hello,  my name is Vahid Navazan</Name>
          <Description>Short text with details about you, what you do or your professional career. You can add more information on the about page.</Description>
          <MainBtn primary>Projects</MainBtn>
          <MainBtn secondary>LinkedIn</MainBtn>
        </TextBlock>
        <Photo src={photo} alt='Foto Vahid Navazan'/>
      </FlexWrapper>
    </StyledMain>
  );
};

type MainBtnPropsType = {
  primary?: boolean
  secondary?: boolean
}

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
  color: #fdc435;
  font-family: Nunito;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: uppercase;
`

const Name = styled.h2`
  color: #333333;
  font-family: Roboto;
  font-size: 64px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: left;
`

const Description = styled.p`
  color: #828282;
  font-family: Nunito;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0%;
  text-align: left;
  padding-right: 22px;
`
const MainBtn = styled.button<MainBtnPropsType>`
  padding: 8px 24px;
  border-radius: 8px;
  color: #25282b;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  margin-right: 12px;
  border: none;
  cursor: pointer;

  ${props => props.primary && css<MainBtnPropsType>`
    background-color: #fdc435;

    &:hover {
      background-color: #fe3b3b;
      font-size: 20px;
    }
  `}
    
  ${props => props.secondary && css<MainBtnPropsType>`
    background-color: #ffffff;
    border: 2px solid rgb(37, 40, 43);

    &:hover {
      border: 3px solid #fe3b3b;
      font-size: 20px;
    }
  `} 
`

const Photo = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`
