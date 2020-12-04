import React from 'react'
import {AccordionProps} from './Accordion.interface'
import { AccordionStyled } from './Accordion.styles'
export const Accordion: React.FC<AccordionProps> = ({fluid, layout, children}) => {

    return <AccordionStyled fluid={fluid} layout={layout}>{children}</AccordionStyled>
}