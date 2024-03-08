import styled from "styled-components";

type FlexWrapperPropsTytpe = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string 
}

export const FlexWrapper = styled.div<FlexWrapperPropsTytpe>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  padding: 0 120px;
`