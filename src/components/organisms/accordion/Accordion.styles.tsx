import styled from "styled-components";
import { AccordionProps } from './Accordion.interface';
import {ContainerStyled } from '../../atoms/container/Container.styles'

export const AccordionStyled = styled(ContainerStyled)<AccordionProps>`

    border: 1px solid ${props => props.theme.colors.neutral};
    border-radius: ${props => props.theme.borderRadius};


    & > :not(:first-child) {
        border-top: 1px solid ${props => props.theme.colors.neutral};
    }

`;