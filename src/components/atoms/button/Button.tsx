import React from 'react';
import { ButtonStyled } from './Button.styles';
import { ButtonProps } from './Button.interface';


  /*########### COMPONENT ###########*/
export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {

  const handleClick = () => {
  if (rest.handleClick) {
      rest.handleClick()
  }
}

  const handleMouseDown = (e: React.FormEvent) => {
    e.preventDefault();
    // buttons receive focus on mousedown, so preventing that is as simple as using e.preventDefault()
  };

  return (
    <ButtonStyled 
      type="button" 
      {...rest} 
      onClick={handleClick} 
      onMouseDown={handleMouseDown}
    >
      {children}
    </ButtonStyled>
  );
};
