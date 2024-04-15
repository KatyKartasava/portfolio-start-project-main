import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <SocialList>
            <SocialItem>
              <SocialLink>
                <Icon iconId={"instagram"} width={"48"} height={"48"} viewBox={"0 0 48 48"}/>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon iconId={"linkedin"} width={"48"} height={"48"} viewBox={"0 0 48 48"}/>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon iconId={"mail"} width={"48"} height={"48"} viewBox={"0 0 48 48"}/>
              </SocialLink>
            </SocialItem>
          </SocialList>
          <Copyright>Madelyn Torff 2021</Copyright>
          </FlexWrapper>  
        </Container>  
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 400px;
  
`
const SocialList = styled.ul`
  display: flex;
  gap: 24px;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
  cursor: pointer;

  svg {
    fill: ${theme.colors.fontP};
  }

  &:hover svg {
    fill: #7cfe3b;
  }
`

const Copyright = styled.small``