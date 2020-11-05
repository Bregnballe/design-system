import React from 'react';

import { ButtonInputStyled } from './ButtonInput.styles';
import { ButtonInputProps } from './ButtonInput.interface';
import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';


export const ButtonInput: React.FC<ButtonInputProps> = (props) => (
    <ButtonInputStyled { ...props } >
        <Input { ...props } placeholder="Type name" />
        <Button { ...props } label="Send"/>
    </ButtonInputStyled>
);
