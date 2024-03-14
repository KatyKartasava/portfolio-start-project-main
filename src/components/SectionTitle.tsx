import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-family: Playfair Display;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  position: relative;

  &::after {
    width: 100px;
    height: 4px;
    border-radius: 2px;
    background: #fdc435;
    display: block;
    margin: 0 auto;
    content: '';
  }
`