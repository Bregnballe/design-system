import React from 'react';
import { ButtonStyled } from './Button.styles';
import { ButtonProps } from './Button.interface';


  /*########### CLICK ###########*/
const handleClick = () => {
  console.log("clicked");
}

  /*########### MOUSE DOWN ###########*/
  const handleMouseDown = (e: React.FormEvent) => {
    e.preventDefault();
    // buttons receive focus on mousedown, so preventing that is as simple as using e.preventDefault()
  };


  /*########### COMPONENT ###########*/
export const Button: React.FC<ButtonProps> = ({...props}) => {
  return (
    <ButtonStyled {...props} onClick={handleClick} onMouseDown={handleMouseDown}>
      {props.label}
    </ButtonStyled>
  );
};
