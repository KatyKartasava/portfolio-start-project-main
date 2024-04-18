import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return <ListItem key={index}>
            <Link href="#">{item}</Link>
          </ListItem>
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 48px;
    justify-content: end;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`
const ListItem = styled.li``

const Link = styled.a`
  color: ${theme.colors.fontP};
  font-family: Raleway;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;

  &::after {
    width: 90%;
    height: 4px;
    border-radius: 2px;
    background: ${theme.colors.colorHover};
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