import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { Button } from '../../../../components/Button';
import { Container } from '../../../../components/Container';
import { theme } from '../../../../styles/Theme';

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <StyledForm>
          <label>Name <Field /></label>
          <label>Email <Field /></label>
          <label>Message <Field as={"textarea"}/></label>
          <Button primary type={"submit"}>Send</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  
  gap: 24px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  & label {
    color: ${theme.colors.fontP};
    font-family: Nunito;
    font-size: 16px;
    font-weight: 600;
  }

  & button {
    align-self: flex-end;
    margin: 0;
  }

  textarea {
    resize: none;
    height: 160px;
  }
`

const Field = styled.input`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #E8ECF4;
  border-radius: 8px;
  padding: 8px 12px;
  margin-top: 8px;

  &:focus-visible {
    outline: 1px solid #E8ECF4;
  }
`