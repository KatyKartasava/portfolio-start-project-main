import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Logo = () => {
  return (
    <StyledLogo>
      <LinkLogo href="#">Vahid Navazan</LinkLogo>
    </StyledLogo>  
  );
};

const StyledLogo = styled.div`
  padding: 12px 0; 
  position: relative;
`

const LinkLogo = styled.a`
  color: ${theme.colors.fontP};
  font-family: Comfortaa;
  font-size: 18px;
  font-weight: 700;
  line-height: 180%;
  text-align: left;

  &::after {
    width: 90%;
    height: 4px;
    border-radius: 2px;
    background: ${theme.colors.accent};
    display: block;
    margin: 0 auto;
    content: "";
    transform: scale(0);
  }
  


  &:hover {
   color: ${theme.colors.colorHover};

   &::after {
    transform: scale(1);
   }
  }
`