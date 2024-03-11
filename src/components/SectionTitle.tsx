import styled from "styled-components";

export const SectionTitle = styled.h2`
  color: #25282b;
  font-family: Playfair Display;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0%;
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