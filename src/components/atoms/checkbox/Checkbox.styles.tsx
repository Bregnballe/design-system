import styled, {css} from "styled-components";
import { mix, lighten, darken } from 'polished'
import { CheckboxProps } from './Checkbox.interface';


/*########### HIDING DEFAULT CHECKBOX ###########*/

export const InputStyled = styled.input.attrs({ type: "checkbox" })`
    position: absolute;
    top: 0;
    left: 0;
    clip-path: circle(0%);
    padding: 0;
    border: 0;
    width: 0;
    height: 0;
    overflow: hidden;
`;


export const BoxStyled = styled.div<CheckboxProps>`
    pointer-events: none; //make sure click hits parent (Label)
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    background-color: #fff;
    border-style: solid;
    border-radius: 0.333em;
    border-width: 0.167em;
    width: 1.667em;
    height: 1.667em;
    transition: box-shadow 0.2s, border-color 0.2s;


    /*########### CHECKED STATUS ###########*/
    ${({theme: {colors}, ...props}) =>
        props.checked === true ? 
        css`
            border-color: ${mix(0.2, "black", colors.primary)};
        `
        : 
        css `
            border-color: ${colors.neutral};
        `    

    }    

`;

/*########### STYLING LABEL AS CHECKBOX ###########*/
export const LabelStyled = styled.label<CheckboxProps>`
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    position: relative;
    cursor: pointer;
    padding: 1em;
    border-radius: 0.333em;
    border-width: 0.167em;
    justify-content: ${props => props.layout};
    transition: box-shadow 0.2s, padding 0.2s;


    & > *:nth-child(2) {
    margin-left: 0.5em;
    }

    &:focus-within {
    z-index: 1;    
    }

    ${({theme: {colors}}) =>
        css`
            &:focus-within > ${BoxStyled} {
                box-shadow: 0 0 0 0.25em ${lighten(0.1, colors.primary)};
            } 
        `
    }     //When the hidden checkbox inside the label recieves focus

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
        : // DEFAULT: props.componentSize === 'small'
        css `
            font-size: 1rem;
        `    
    }    



    /*########### CHECKED STATUS ###########*/
    ${({theme: {colors}, ...props}) =>
        props.checked === true ? 
        css`
            &:hover > ${BoxStyled} {
                border-color: ${mix(0.4, "black", colors.primary)};
            }
        `
        : 
        css `
            &:hover > ${BoxStyled} {
                border-color: ${mix(0.2, "black", colors.neutral)};
            }
        `    
    }

    /*########### CHECK BOX AS BUTTON ###########*/
    ${({theme: {colors, shadowWidth}, ...props}) =>
            props.asButton === true ? 
            css`
                border-style: solid;
                border-color: ${darken(0.1, colors.secondary)};
                background-color: ${colors.secondary};
                box-shadow: inset 0 -${shadowWidth} 0 0 ${darken(0.1, colors.secondary)};
                &:hover {
                    background-color: ${lighten(0.05, colors.secondary)};
                }
                &:active:focus-within {
                    // active does not trigger on spacebar ???
                }
                &:active {
                    background-color: ${darken(0.05, colors.secondary)};
                    box-shadow: inset 0px ${shadowWidth} 0px 0px ${darken(0.1, colors.secondary)};
                    padding-top: calc(1em + ${shadowWidth});
                    padding-bottom: calc(1em - ${shadowWidth});
                }
                &:focus-within > ${BoxStyled} {
                    box-shadow: none;
                } 
                &:focus-within {
                    box-shadow: inset 0 -${shadowWidth} 0 0 ${darken(0.1, colors.secondary)},  
                    0 0 0 0.25em ${lighten(0.1, colors.primary)};
                } 
            ` 
            :
            css`
                background-color: transparent;
                border-radius: 0;
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