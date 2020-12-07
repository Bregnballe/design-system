import React from 'react'
import {ContainerStyled} from './Container.styles'
import { ContainerProps } from './Container.interface'

export const Container: React.FC<ContainerProps> = ({as, fluid, layout, padding, children}) => {
    return (
    <ContainerStyled
        padding={padding}
        layout={layout}
        fluid={fluid}
        as={as}
    >
        {children}
    </ContainerStyled>
    )
}
