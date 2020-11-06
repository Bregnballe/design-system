import React from 'react';

import { ButtonGroupStyled } from './ButtonGroup.styles';
import { ButtonGroupProps } from './ButtonGroup.interface';
import { Button } from '../../atoms/button/Button';


export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => (
    <ButtonGroupStyled { ...props } >
        <Button { ...props } label="Save"/>
        <Button { ...props } label="Export"/>
        <Button { ...props } label="Share"/>
    </ButtonGroupStyled>     
);




/*
export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => (
    <ButtonGroupStyled { ...props } /> 
);
*/
