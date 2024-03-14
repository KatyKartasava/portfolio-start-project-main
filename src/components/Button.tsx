import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
  primary?: boolean
  secondary?: boolean
}

export const Button = styled.button<ButtonPropsType>`
  padding: 8px 24px;
  border-radius: 8px;
  color: #25282b;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  margin-right: 12px;
  border: none;
  cursor: pointer;

  ${props => props.primary && css<ButtonPropsType>`
    background-color: ${theme.colors.accent};

    &:hover {
      background-color: #7cfe3b;
      font-size: 20px;
    }
  `}
    
  ${props => props.secondary && css<ButtonPropsType>`
    background-color: ${theme.colors.secondaryBg};
    border: 2px solid #25282b;

    &:hover {
      border: 3px solid #7cfe3b;
      font-size: 20px;
    }
  `} 
`
