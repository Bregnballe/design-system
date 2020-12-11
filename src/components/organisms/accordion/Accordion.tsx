import React from 'react'
import {AccordionProps} from './Accordion.interface'
import { AccordionStyled } from './Accordion.styles'

export const Accordion: React.FC<AccordionProps> = ({children, ...rest}) => {

    return (
    <AccordionStyled {...rest}>
        {children}
    </AccordionStyled>
    )
};