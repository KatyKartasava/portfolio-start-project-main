import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  font-family: Playfair Display;
  font-size: 48px;
  line-height: 72px;
  text-align: center;

  padding: 144px 0 80px;

  position: relative;

  &::after {
    width: 100px;
    height: 4px;
    border-radius: 2px;
    background: ${theme.colors.accent};
    display: inline-block;
    content: "";

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`