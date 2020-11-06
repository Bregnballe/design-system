import styled, {css} from "styled-components";
import { InputProps } from './Input.interface';

export const InputStyled = styled.input<InputProps>`


/*########### DEFAULT ###########*/
display: inline-block;
border-style: solid;
border-color: ${props => props.theme.colors.neutral};
padding: 1em;
font-weight: 500;
border-radius: ${props => props.theme.borderRadius};

&:focus {
    outline: none; 
    border-color: ${props => props.theme.colors.primary};
}



/*########### SIZE ###########*/
${({theme: {borderRadius, borderWidth}, ...props}) =>
    props.componentSize === 'large' ? 
    css`
        font-size: 2rem;
        border-width: calc(${borderWidth}*2);
        border-radius: calc(${borderRadius}*2);
    `
    : props.componentSize === 'medium' ?
    css`
        font-size: 1.5rem;
        border-width: calc(${borderWidth}*1.5);
        border-radius: calc(${borderRadius}*1.5);
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
