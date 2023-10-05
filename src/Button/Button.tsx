import React from 'react';
import styled from '@emotion/styled';

import useTheme from '../useTheme'
import type {Theme} from '../useTheme'

const StyledButton = styled.button<{ $theme: Theme, $primary: boolean }>`
  /* Adapt the color based on primary prop */
  background: ${(props) =>
    props.$primary ? props.$theme.color.primary : 'white'};
  color: ${(props) => (props.$primary ? 'white' : 'black')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) =>
    props.$primary ? props.$theme.color.primary : 'black'};
  border-radius: 3px;
`;

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  children?: React.ReactNode;
}
const Button = ({ primary = false, children, ...props }: ButtonProps) => {
  const theme = useTheme()
  return <StyledButton $theme={theme} $primary={primary} {...props} >{children}</StyledButton>;
};

export default Button;
