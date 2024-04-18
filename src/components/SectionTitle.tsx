import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({family: "'Playfair Display', sans-serif", color: theme.colors.fontP, weight: 700, Fmax: 48, Fmin: 48})};
  
  line-height: 72px;
  text-align: center;

  margin-bottom: 80px;

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
    bottom: -4px;
    transform: translateX(-50%);
  }

  @media ${theme.media.mobile} {
    margin-bottom: 50px;
  }
`