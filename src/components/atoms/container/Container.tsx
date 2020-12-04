import React from 'react'
import {ContainerStyled} from './Container.styles'
import { ContainerProps } from './Container.interface'

export const Container: React.FC<ContainerProps> = ({fluid, layout, padding, children}) => {
    return (
    <ContainerStyled
        padding={padding}
        layout={layout}
        fluid={fluid}
    >
        {children}
    </ContainerStyled>
    )
}
