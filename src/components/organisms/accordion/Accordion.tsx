import React from 'react'
import {AccordionProps} from './Accordion.interface'
import { AccordionStyled } from './Accordion.styles'
export const Accordion: React.FC<AccordionProps> = ({as, fluid, layout, children}) => {

    return <AccordionStyled as={as} fluid={fluid} layout={layout}>{children}</AccordionStyled>
}