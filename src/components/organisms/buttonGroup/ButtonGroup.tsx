import React from 'react';

import { ButtonGroupStyled } from './ButtonGroup.styles';
import { ButtonGroupProps } from './ButtonGroup.interface';


export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => (
    <ButtonGroupStyled { ...props } /> 
);