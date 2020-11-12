import React from 'react';

import { ButtonInputStyled } from './ButtonInput.styles';
import { ButtonInputProps } from './ButtonInput.interface';


export const ButtonInput: React.FC<ButtonInputProps> = (props) => (
    <ButtonInputStyled  {...props }>
        {props.children}
    </ButtonInputStyled>
);
