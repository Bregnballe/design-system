import React from 'react';

import { InputGroupStyled } from './InputGroup.styles';
import { InputGroupProps } from './InputGroup.interface';


export const InputGroup: React.FC<InputGroupProps> = ({children, ...rest}) => {

    return (
        <InputGroupStyled {...rest}>
            {children}
        </InputGroupStyled>
    )
};
