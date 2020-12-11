import React from 'react';

import { RadioButtonGroupStyled } from './RadioButtonGroup.styles';
import { RadioButtonGroupProps } from './RadioButtonGroup.interface';

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({children, ...rest}) => {
    
    return (
        <RadioButtonGroupStyled { ...rest } >
            {children}
        </RadioButtonGroupStyled>     
    )
};
