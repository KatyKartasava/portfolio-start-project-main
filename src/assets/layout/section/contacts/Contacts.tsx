import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { Button } from '../../../../components/Button';

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contacts</SectionTitle>
      <StyledForm>
        Name<Field />
        Email<Field />
        Message<Field as={"textarea"}/>
        <Button primary type={"submit"}>Send</Button>
      </StyledForm>
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