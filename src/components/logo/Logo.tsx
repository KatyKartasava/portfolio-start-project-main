import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Logo = () => {
  return (
    <StyledLogo href="#">Vahid Navazan</StyledLogo>
  );
};

const StyledLogo = styled.a`
  padding: 12px 0;
  color: ${theme.colors.fontP};
  font-family: Comfortaa;
  font-size: 18px;
  font-weight: 700;
  line-height: 180%;
  text-align: left;
`