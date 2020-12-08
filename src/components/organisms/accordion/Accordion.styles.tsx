import styled from "styled-components";
import { AccordionProps } from './Accordion.interface';
import {ContainerStyled } from '../../atoms/container/Container.styles'

export const AccordionStyled = styled(ContainerStyled)<AccordionProps>`

    border: 2px solid ${props => props.theme.colors.neutral};
    border-radius: ${props => props.theme.borderRadius};

    & button {
        border-radius: 0px;
    }

    & *:first-child button {
        border-top-left-radius: ${props => props.theme.borderRadius};
        border-top-right-radius: ${props => props.theme.borderRadius};
    }

    & *:last-child button {
        border-bottom-left-radius: ${props => props.theme.borderRadius};
        border-bottom-right-radius: ${props => props.theme.borderRadius};
    }

    & > :not(:first-child) {
        border-top: 2px solid ${props => props.theme.colors.neutral};
    }

    &:not(:first-child):not(:last-child) > button {
        border-radius: 0;
    }

`;