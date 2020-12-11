import styled, {css} from "styled-components";
import { ButtonProps } from './Button.interface';
import { darken, lighten } from 'polished'


export const ButtonStyled = styled.button<ButtonProps>`

/*########### DEFAULT ###########*/
display:            inline-flex;
align-items:        center;
vertical-align:     middle;
cursor:             pointer;
user-select:        none;
border-style:       solid;
padding:            1em;
font-weight:        500;
border-radius:      ${props => props.theme.borderRadius};
justify-content:    ${props => props.layout};
transition:         box-shadow 0.2s, padding 0.2s;
border-width:       ${props => props.theme.borderWidth};
border-radius:      ${props => props.theme.borderRadius};


&:active {
padding-top:        calc(1em + ${props => props.theme.shadowWidth});
padding-bottom:     calc(1em - ${props => props.theme.shadowWidth});
}

&:focus {
outline:            none; 
z-index:            1;
}

& > *:nth-child(2) {
    margin-left: 0.333em;
}

& > svg { 
fill:               ${props => props.theme.colors.primary};
}



/*########### COLOR ########### */
${({theme: {colors, shadowWidth}, ...props}) =>

props.color === 'quaternary' ? 
css`
background-color:   ${colors.quaternary};
border-color:       ${colors.quaternary};
color:              ${colors.primary};

&:active {
box-shadow:         none;
}

&:focus {
box-shadow:         0 0 0 0.25em ${lighten(0.1, colors.primary)};
}

`


: props.color === 'tertiary' ? 
css`
background-color:   ${colors.quaternary};
border-color:       ${colors.neutral};
color:              ${colors.primary};

&:active {
box-shadow:         none;
}

&:focus {
box-shadow:         0 0 0 0.25em ${lighten(0.1, colors.primary)};
}

`


: props.color === 'secondary' ?
css`
background-color:   ${colors.secondary};
border-color:       ${darken(0.1, colors.secondary)};
box-shadow:         inset 0 -${shadowWidth} 0 0 ${darken(0.1, colors.secondary)};
color:              ${colors.primary};

&:hover {
background-color:   ${lighten(0.05, colors.secondary)};
}

&:active:focus {
background-color:   ${darken(0.05, colors.secondary)};
box-shadow:         inset 0 ${shadowWidth} 0 0 ${darken(0.1, colors.secondary)},
                    0 0 0 0.25em ${lighten(0.1, colors.primary)};
}

&:active {
background-color:   ${darken(0.05, colors.secondary)};
box-shadow:         inset 0 ${shadowWidth} 0 0 ${darken(0.1, colors.secondary)};
}

&:focus {
box-shadow:         inset 0 -${shadowWidth} 0 0 ${darken(0.1, colors.secondary)},  
                    0 0 0 0.25em ${lighten(0.1, colors.primary)};
}

` 


: // DEFAULT: props.color === 'primary' 
css`
background-color:   ${colors.primary};
border-color:       ${darken(0.1, colors.primary)};
box-shadow:         inset 0 -${shadowWidth} 0 0 ${darken(0.1, colors.primary)};
color:              white;

&:hover {
background-color:   ${lighten(0.05, colors.primary)};
}

&:active:focus {
background-color:   ${darken(0.05, colors.primary)};
box-shadow:         inset 0 ${shadowWidth} 0 0 ${darken(0.1, colors.primary)},
                    0 0 0 0.25em ${lighten(0.1, colors.primary)};
}

&:active {
background-color:   ${darken(0.05, colors.primary)};
box-shadow:         inset 0 ${shadowWidth} 0 0 ${darken(0.1, colors.primary)};
}

&:focus {
box-shadow:         inset 0 -${shadowWidth} 0 0 ${darken(0.1, colors.primary)},  
                    0 0 0 0.25em ${lighten(0.1, colors.primary)};
}

& > svg { 
fill:              white;
}
`
}


/*########### SIZE ###########*/
${props =>

props.componentSize === 'large' ? 
css`
font-size:          2rem;
`
: props.componentSize === 'medium' ?
css`
font-size:          1.5rem;
` 
: //  DEFAULT: props.componentSize === 'small' 
css `
font-size:          1rem;
`    
}

/*########### FLUID ###########*/
${props =>

props.fluid && 
css`
width:              100%;
text-align:         center;
`
}

`;