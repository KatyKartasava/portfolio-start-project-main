import React from 'react';
import styled from 'styled-components';

export const Main =() => {
  return (
    <div>
      <StyledSkills>
        <h2>Skills</h2>
      </StyledSkills>
    </div>
  );
};

const StyledSkills = styled.section`
  display: flex;
  justify-content: center;
`
