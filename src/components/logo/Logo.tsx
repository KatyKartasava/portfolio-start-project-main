import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import logoPage from '../../assets/images/Madelyn Torff.svg';

export const Logo = () => {
  return (
    <LogoLink href="#">
      <img src={logoPage} alt='' />
    </LogoLink> 
  );
};



const LogoLink = styled.a`
  img {
    padding: 4px 0;
  }
  &::after {
    width: 90%;
    height: 2px;
    border-radius: 2px;
    background: ${theme.colors.colorHover};
    display: block;
    margin: 0 auto;
    content: "";
    transform: scale(0);
    transition: ${theme.animations.transition};
  }
  
  &:hover {
   &::after {
    transform: scale(1);
   }
  }
`