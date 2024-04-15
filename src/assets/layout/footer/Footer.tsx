import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';
import vector from '../../images/Vector.svg';

export const Footer = () => {
  return (
    <StyledFooter>
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
          <FooterImg src={vector}/> 
      </FlexWrapper>  
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding-top: 56px;
  position: relative;

`
const FooterImg = styled.img`
  position: absolute;
  top: 30%;

  z-index: -2;
 
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

const Copyright = styled.small`
  color: ${theme.colors.fontText};
  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
  padding-top: 32px;
`