import React from 'react';

import { CheckboxGroupStyled } from './CheckboxGroup.styles';
import { CheckboxGroupProps } from './CheckboxGroup.interface';

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({children, ...rest}) => {
    
    return (
        <CheckboxGroupStyled { ...rest } >
            {children}
        </CheckboxGroupStyled>     
    )
};
