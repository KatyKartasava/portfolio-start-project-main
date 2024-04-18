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
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 142px;
    height: 32px;
   }
  

  svg {
    fill: ${theme.colors.fontP};
  }

  &:hover svg {
    fill: ${theme.colors.accent};
    filter: drop-shadow(2px 0px 0px ${theme.colors.fontP});
  }

`