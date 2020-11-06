import styled, {css} from "styled-components";
import { ButtonProps } from './Button.interface';
import { darken, lighten } from 'polished'


export const ButtonStyled = styled.button<ButtonProps>`


/*########### DEFAULT ###########*/
display: inline-block;
cursor: pointer;
user-select: none;
border-style: solid;
padding: 1em;
font-weight: 500;
border-radius: ${props => props.theme.borderRadius};
transition: box-shadow 0.2s;


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
        border-color: ${darken(0.1, colors.primary)};
        box-shadow: inset 0px -${shadowWidth} 0px 0px ${darken(0.1, colors.primary)};
        color: white;
        &:hover {
            background-color: ${lighten(0.05, colors.primary)};
        }
        &:active {
            background-color: ${darken(0.05, colors.primary)};
            box-shadow: inset 0px ${shadowWidth} 0px 0px ${darken(0.1, colors.primary)};
        }
        &:focus {
            box-shadow: inset 0px -${shadowWidth} 0px 0px ${darken(0.1, colors.primary)},  0px 0px 0px 1px #fff, 0px 0px 0px 3px ${colors.primary};
        }
    `
    : props.color === 'secondary' ?
    css`
        background-color: ${colors.secondary};
        border-color:  ${darken(0.1, colors.secondary)};
        box-shadow: inset 0px -${shadowWidth} 0px 0px ${darken(0.1, colors.secondary)};
        color: ${colors.primary};
        &:hover {
            background-color: ${lighten(0.05, colors.secondary)};
        }
        &:active {
            background-color: ${darken(0.05, colors.secondary)};
            box-shadow: inset 0px ${shadowWidth} 0px 0px ${darken(0.1, colors.secondary)};
        }
        &:focus {
            box-shadow: inset 0px -${shadowWidth} 0px 0px ${darken(0.1, colors.secondary)},  0px 0px 0px 1px #fff, 0px 0px 0px 3px ${colors.primary};
        }
}
    ` 
    :
    css`
        background-color: ${colors.tertiary};
        border-color: ${colors.tertiary};
        color: ${colors.primary};

        &:active {
            box-shadow: none;
        }

        &:focus {
            box-shadow:  0px 0px 0px 1px #fff, 0px 0px 0px 3px ${colors.primary};
        }
    `
}


/*########### SIZE ###########*/
${({theme: {colors, borderRadius, borderWidth, shadowWidth}, ...props}) =>
    props.componentSize === 'large' ? 
    css`
        font-size: 2rem;
        border-width: calc(${borderWidth}*2);
        border-radius: calc(${borderRadius}*2);
        box-shadow: inset 0px -calc(${shadowWidth}*2) 0px 0px ${darken(0.1, colors[props.color],)}; //ex: props.theme.colors["primary"]
        &:active {
            box-shadow: inset 0px calc(${shadowWidth}*2) 0px 0px ${darken(0.1, colors[props.color])};
        }
    `
    : props.componentSize === 'medium' ?
    css`
        font-size: 1.5rem;
        border-width: calc(${borderWidth}*1.5);
        border-radius: calc(${borderRadius}*1.5);
        box-shadow: inset 0px -calc(${shadowWidth}*1.5) 0px 0px ${darken(0.1, colors[props.color])}; //ex: props.theme.colors["primary"]
        &:active {
            box-shadow: inset 0px calc(${shadowWidth}*1.5) 0px 0px ${darken(0.1, colors[props.color])};
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
