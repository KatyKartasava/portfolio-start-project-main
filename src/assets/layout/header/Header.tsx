import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../../components/logo/Logo';
import { Menu } from '../../../components/menu/Menu';

const items = ["About", "Projects", "Contacts"]

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems = {items} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 56px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
`