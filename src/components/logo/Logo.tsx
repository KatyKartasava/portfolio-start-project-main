import React from 'react';
import styled from 'styled-components';

export const Logo = () => {
  return (
    <StyledLogo href="#">Vahid Navazan</StyledLogo>
  );
};

const StyledLogo = styled.a`
  padding: 12px 0;
  color: #25282b;
  font-family: Comfortaa;
  font-size: 18px;
  font-weight: 700;
  line-height: 180%;
  letter-spacing: 0px;
  text-align: left;
  text-decoration: none;
`