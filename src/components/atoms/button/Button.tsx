import React from 'react';
import { ButtonStyled } from './button.styles';

export interface ButtonProps {
  importance?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({...props}) => {
  return (
    <ButtonStyled {...props}>
      {props.label}
    </ButtonStyled>
  );
};
