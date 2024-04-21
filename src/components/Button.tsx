import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
  primary?: boolean
  secondary?: boolean
}

export const Button = styled.button<ButtonPropsType>`
  padding: 8px 24px;
  border-radius: 8px;
  color: ${theme.colors.fontP};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  margin-right: 12px;
  border: none;
  cursor: pointer;
  transition: ${theme.animations.transition};

  ${props => props.primary && css<ButtonPropsType>`
    background-color: ${theme.colors.accent};

    &:hover {
      background-color: ${theme.colors.colorHover};
      transform: translateY(5px);
    }
  `}
    
  ${props => props.secondary && css<ButtonPropsType>`
    background-color: ${theme.colors.secondaryBg};
    border: 2px inset ${theme.colors.fontP};
    

    &:hover {
      background-color: ${theme.colors.colorHover};
      transform: translateY(5px);
    }
  `} 
`
