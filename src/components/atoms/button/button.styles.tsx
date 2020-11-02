import styled, {css} from "styled-components";
import { ButtonProps } from './Button.interface';
import { mix } from 'polished'

export const ButtonStyled = styled.button<ButtonProps>`


/*########### DEFAULT ###########*/
display: inline-block;
cursor: pointer;
user-select: none;
border-style: solid;
padding: 1em;
font-weight: 500;
border-radius: ${props => props.theme.borderRadius};


&:active {
    padding-top: calc(1em + ${props => props.theme.shadowWidth});
    padding-bottom: calc(1em - ${props => props.theme.shadowWidth});
}
&:focus {
    outline: none; 
}



/*########### COLOR ########### */
${({theme: {colors, shadowWidth}, ...props}) =>
    props.color === 'primary' ? 
    css`
        background-color: ${colors.primary};
        border-color: ${mix(0.2, "black", colors.primary)};
        box-shadow: inset 0px -${shadowWidth} 0px 0px ${mix(0.2, "black", colors.primary)};
        color: white;
        &:hover {
            background-color: ${mix(0.05, "white", colors.primary)};
        }
        &:active {
            background-color: ${mix(0.05, "black", colors.primary)};
            box-shadow: inset 0px ${shadowWidth} 0px 0px ${mix(0.2, "black", colors.primary)};
        }
        &:focus {
            box-shadow: inset 0px -${shadowWidth} 0px 0px ${mix(0.2, "black", colors.primary)},  0px 0px 0px 1px #fff, 0px 0px 0px 3px ${colors.primary};
        }
    `
    : props.color === 'secondary' ?
    css`
        background-color: ${colors.secondary};
        border-color: ${mix(0.2, "black", colors.secondary)};
        box-shadow: inset 0px -${shadowWidth} 0px 0px ${mix(0.2, "black", colors.secondary)};
        color: ${colors.primary};
        &:hover {
            background-color: ${mix(0.05, "white", colors.secondary)};
        }
        &:active {
            background-color: ${mix(0.05, "black", colors.secondary)};
            box-shadow: inset 0px ${shadowWidth} 0px 0px ${mix(0.2, "black", colors.secondary)};
        }
        &:focus {
            box-shadow: inset 0px -${shadowWidth} 0px 0px ${mix(0.2, "black", colors.secondary)},  0px 0px 0px 1px #fff, 0px 0px 0px 3px ${colors.primary};
        }
}
    ` 
    :
    css`
        background-color: ${colors.tertiary};
        border-color: ${colors.tertiary};
        color: ${colors.primary};
        &:focus {
            box-shadow:  0px 0px 0px 1px #fff, 0px 0px 0px 3px ${colors.primary};
        }
    `
}


/*########### SIZE ###########*/
${({theme: {colors, borderRadius, borderWidth, shadowWidth}, ...props}) =>
    props.size === 'large' ? 
    css`
        font-size: 2rem;
        border-width: calc(${borderWidth}*2);
        border-radius: calc(${borderRadius}*2);
        box-shadow: inset 0px -calc(${shadowWidth}*2) 0px 0px ${mix(0.2, "black", colors[props.color])}; //ex: props.theme.colors["primary"]
        &:active {
            box-shadow: inset 0px calc(${shadowWidth}*2) 0px 0px ${mix(0.2, "black", colors[props.color])};
        }
    `
    : props.size === 'medium' ?
    css`
        font-size: 1.5rem;
        border-width: calc(${borderWidth}*1.5);
        border-radius: calc(${borderRadius}*1.5);
        box-shadow: inset 0px -calc(${shadowWidth}*1.5) 0px 0px ${mix(0.2, "black", colors[props.color])}; //ex: props.theme.colors["primary"]
        &:active {
            box-shadow: inset 0px calc(${shadowWidth}*1.5) 0px 0px ${mix(0.2, "black", colors[props.color])};
        }
    ` 
    : 
    css `
        font-size: 1rem;
        border-width: ${borderWidth};
    `    
}

`;

/*
background-color: ${({colors}:ButtonProps) => colors === 'primary' ? "blue" : colors === 'secondary' ? 'grey' : 'transparent' }; */
