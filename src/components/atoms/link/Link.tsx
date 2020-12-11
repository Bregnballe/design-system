import React from 'react';
import { LinkStyled } from './Link.styles';
import { LinkProps } from './Link.interface';

export const Link: React.FC<LinkProps> = ({...props}) => {
  return (
    <LinkStyled href="#" {...props}>
      {props.label}
    </LinkStyled>
  );
};
