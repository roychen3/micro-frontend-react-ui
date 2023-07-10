import React from 'react';
import styled from '@emotion/styled'

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? props.theme.colors.primary : "white"};
  color: ${props => props.$primary ? "white" : props.theme.colors.primary};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-width: 2px;
  border-style:  solid;
  border-color: ${props => props.theme.colors.primary};
  border-radius: 3px;
`;

const Button = props => {
  return (
    <StyledButton $primary={props.primary}>
      {props.children}
    </StyledButton>
  )
}

export default Button;