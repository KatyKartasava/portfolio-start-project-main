import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { Button } from '../../../../components/Button';
import { Container } from '../../../../components/Container';

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <StyledForm>
          Name<Field />
          Email<Field />
          Message<Field as={"textarea"}/>
          <Button primary type={"submit"}>Send</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.div`
  min-height: 606px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`

const Field = styled.input``