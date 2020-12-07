import React from 'react';
import { LinkStyled } from './Link.styles';
import { LinkProps } from './Link.interface';

const handleClick = () => {
  console.log("clicked");
}

export const Link: React.FC<LinkProps> = ({...props}) => {
  return (
    <LinkStyled href="#" {...props} onClick={handleClick}>
      {props.label}
    </LinkStyled>
  );
};
