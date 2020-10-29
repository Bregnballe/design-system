import styled, {css} from "styled-components";
import { ButtonProps } from './Button.interface';
import { darken } from 'polished'

export const ButtonStyled = styled.button<ButtonProps>`

display: inline-block;
cursor: pointer;
user-select: none;
border: none;
font-weight: 500;
border-radius: ${props => props.theme.borderRadius};
&:focus {
    box-shadow:  0px 0px 0px 1px #fff, 0px 0px 0px 3px ${props => props.theme.colors.primary};
    outline: none;
}

${({theme: {colors}, ...props}) =>
    props.color === 'primary' ? 
    css`
        background-color: ${colors.primary};
        border: 2px solid ${darken(0.1, colors.primary)};
        box-shadow: inset 0px -2px 0px 0px ${darken(0.1, colors.primary)};
        color: white;
        &:hover {
            background-color: ${darken(0.05, colors.primary)};
        }
        &:active {
            box-shadow: inset 0px 2px 0px 0px ${darken(0.1, colors.primary)};
        }
    `
    : props.color === 'secondary' ?
    css`
        background-color: ${colors.secondary};
        border: 2px solid ${darken(0.1, colors.secondary)};
        box-shadow: inset 0px -2px 0px 0px ${darken(0.1, colors.secondary)};
        color: ${colors.primary};
        &:hover {
            background-color: ${darken(0.05, colors.secondary)};
        }
        &:active {
            box-shadow: inset 0px 2px 0px 0px ${darken(0.1, colors.secondary)};
        }
    ` 
    :
    css`
        background-color: ${colors.tertiary};
        border: 2px solid transparent;
        color: ${colors.primary};
    `
}

${({theme: {bodyText}, ...props}) =>
    props.size === 'large' ? 
    css`
        font-size: 24px;
        padding: 24px;
        border-width: 4px;
        border-radius: 8px;
    `
    : props.size === 'medium' ?
    css`
        font-size: 16px;
        padding: 16px;
        border-width: 3px;
        border-radius: 6px;
    ` 
    : 
    css `
        font-size: ${bodyText};
        padding: 12px;
    `    
}




    
    
`;

/*
background-color: ${({colors}:ButtonProps) => colors === 'primary' ? "blue" : colors === 'secondary' ? 'grey' : 'transparent' }; */
