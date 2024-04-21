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
      </FlexWrapper>  
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 50px 0 240px;

  background-image: url(${vector});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${theme.media.mobile} {
    padding: 56px 0 177px;
  }
`
const SocialList = styled.ul`
  display: flex;
  gap: 24px;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
  cursor: pointer;
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${theme.colors.fontP};
  }

  &:hover svg {
    fill: ${theme.colors.colorHover};
  }
`

const Copyright = styled.small`
  color: ${theme.colors.fontText};
  font-size: 16px;
  line-height: 22px;
  padding-top: 32px;
`