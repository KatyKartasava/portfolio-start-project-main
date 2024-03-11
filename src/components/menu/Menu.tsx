import React from 'react';
import styled from 'styled-components';

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
  color: #25282b;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;

  ul {
    display: flex;
    gap: 48px;
    list-style: none;
    margin: 0;

    li {
      padding: 14px 0;

      a {
      text-decoration: none;
      color: #25282b;
    }
    }
  }
`