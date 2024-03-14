import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Menu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return <li key={index}>
          <a href="#">{item}</a>
        </li>
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  color: ${theme.colors.fontP};
  font-family: Raleway;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;

  ul {
    display: flex;
    gap: 48px;

    li {
      padding: 14px 0;

      a {
      color: inherit;
      }
    }
  }
`