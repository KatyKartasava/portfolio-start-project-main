import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../../styles/Theme';

export const MobileMenu = (props: {menuItems: Array<string>}) => {
  const [menuIsOpen, setmenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => { setmenuIsOpen(!menuIsOpen)}
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={menuIsOpen} onClick={ () => {setmenuIsOpen(false)}}>
        <ul>
          {props.menuItems.map((item: string, index: number) => {
            return <ListItem key={index}>
              <Link href="#">{item}</Link>
          </ListItem>
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: flex;
  }
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  background-color: ${theme.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 1s ease-in-out;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 18px;
    text-align: end;
    transition: 1s ease-in-out;
  }

  ${props => props.isOpen && css<{isOpen: boolean}>`
    transform: translateY(0);

    & ul {
      gap: 48px;
    }
  `}
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  right: 15px;
  top: 16px; 
  width: 24px;
  height: 24px;
  border-radius: 2px;
  z-index: 9999;
  cursor: pointer;

  span {
    display: block;
    width: 18px;
    height: 2px;
    background-color: #000000;
    position: absolute;
    left: 3px;
    top: 11px;
    border-radius: 4px;

    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `} 

    &::before {
      content: "";
      display: block;
      width: 18px;
      height: 2px;
      background-color: #000000;
      border-radius: 4px;
      position: absolute;
      transform: translateY(-4px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
      `} 
    }

    &::after {
      content: "";
      display: block;
      width: 18px;
      height: 2px;
      border-radius: 4px;
      background-color: #000000;
      position: absolute;
      transform: translateY(4px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
      `} 
    }
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
    height: 2px;
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