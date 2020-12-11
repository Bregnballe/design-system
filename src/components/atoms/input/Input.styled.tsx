import styled, {css} from "styled-components";
import { InputProps } from './Input.interface';
import { lighten } from 'polished'

export const InputStyled = styled.input<InputProps>`


/*########### DEFAULT ###########*/
display: inline-flex;
border-style: solid;
border-color: ${props => props.theme.colors.neutral};
padding: 1em;
font-weight: 500;
border-radius: ${props => props.theme.borderRadius};
border-width: ${props => props.theme.borderWidth};
text-align: ${props => props.textAlign};
transition: box-shadow 0.2s, border-color 0.2s;

&:focus {
    outline: none; 
    z-index: 1;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 0.25em ${props => lighten(0.1, props.theme.colors.primary)};
}



/*########### SIZE ###########*/
${props =>
    props.componentSize === 'large' ? 
    css`
        font-size: 2rem;
    `
    : props.componentSize === 'medium' ?
    css`
        font-size: 1.5rem;
    ` 
    : 
    css `
        font-size: 1rem;
    `    
}

/*########### FLUID ###########*/
${props =>

props.fluid && 
css`
width:              100%;
`
}


`;

/*
background-color: ${({colors}:ButtonProps) => colors === 'primary' ? "blue" : colors === 'secondary' ? 'grey' : 'transparent' }; */
