import React from 'react';
import { LinkStyled } from './Link.styles';
import { LinkProps } from './Link.interface';


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
export const Link: React.FC<LinkProps> = ({...props}) => {
  return (
    <LinkStyled href="#" {...props} onClick={handleClick} onMouseDown={handleMouseDown}>
      {props.label}
    </LinkStyled>
  );
};
