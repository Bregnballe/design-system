import React from 'react';
import { LabelStyled } from './Label.styles';
import { LabelProps } from './Label.interface';

export const Label: React.FC<LabelProps> = ({children, ...rest}) => {

    return (
        <LabelStyled {...rest}>
        {children}
        </LabelStyled>
    );
};
