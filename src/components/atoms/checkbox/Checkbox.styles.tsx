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
    width: 20px;
    height: 20px;
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
    border-radius: ${props => props.theme.borderRadius};
    transition: box-shadow 0.2s;


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


    /*########### SIZE ###########*/
    ${({theme: {borderWidth, borderRadius}, ...props}) =>
        props.componentSize === 'large' ? 
        css`
            border-width: calc(${borderWidth}*2);
            border-radius: calc(${borderRadius}*2);
            width: calc(20px*2);
            height: calc(20px*2);
        `
        : props.componentSize === 'medium' ?
        css`
            border-width: calc(${borderWidth}*1.5);
            border-radius: calc(${borderRadius}*1.5);
            width: calc(20px*1.5);
            height: calc(20px*1.5);
        ` 
        : 
        css `
            border-width: ${borderWidth};
            width: 20px;
            height: 20px;
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


    /*########### SIZE ###########*/
    ${({theme: {borderWidth, borderRadius}, ...props}) =>
        props.componentSize === 'large' ? 
        css`
            font-size: 2rem;
            border-width: calc(${borderWidth}*2);
            border-radius: calc(${borderRadius}*2);
            padding: calc(12px*2);
        `
        : props.componentSize === 'medium' ?
        css`
            font-size: 1.5rem;
            border-width: calc(${borderWidth}*1.5);
            border-radius: calc(${borderRadius}*1.5);
            padding: calc(12px*1.5);
        ` 
        : 
        css `
            font-size: 1rem;
            border-width: ${borderWidth};
            border-radius: ${borderRadius};
            padding: 12px;
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

    &:focus-within > ${BoxStyled} {
        box-shadow: 0px 0px 0px 1px #fff, 0px 0px 0px 3px ${props => props.theme.colors.primary};
    } //When the hidden checkbox inside the label recieves focus


    /*########### CHECK BOX AS BUTTON ###########*/
    ${({theme: {colors, shadowWidth}, ...props}) =>
            props.asButton === true ? 
            css`
                border-style: solid;
                border-color: ${darken(0.1, colors.secondary)};
                background-color: ${colors.secondary};
                box-shadow: inset 0px -${shadowWidth} 0px 0px ${darken(0.1, colors.secondary)};
                &:hover {
                    background-color: ${lighten(0.05, colors.secondary)};
                }
                &:active {
                    background-color: ${darken(0.05, colors.secondary)};
                    box-shadow: inset 0px ${shadowWidth} 0px 0px ${darken(0.1, colors.secondary)};
                    padding-top: calc(1em + ${props => props.theme.shadowWidth});
                    padding-bottom: calc(1em - ${props => props.theme.shadowWidth});
                }
                &:focus-within > ${BoxStyled} {
                    box-shadow: none;
                } 
                &:focus-within {
                    box-shadow: 0px 0px 0px 1px #fff, 0px 0px 0px 3px ${colors.primary};
                } 
            ` 
            :
            css`
                padding: 0px;
                background-color: transparent;
                border-radius: 0px;
            ` 
    } 

`

/*########### STYLING THE NEW LABEL ###########*/

export const SpanStyled = styled.span<CheckboxProps>`
    pointer-events: none; //make sure click hits parent (Label)

        /*########### SIZE ###########*/
        ${props =>
        props.componentSize === 'large' ? 
        css`
            font-size: 2rem;
            padding-left: calc(8px*2);
        `
        : props.componentSize === 'medium' ?
        css`
            font-size: 1.5rem;
            padding-left: calc(8px*1.5);
        ` 
        : 
        css `
            font-size: 1rem;
            padding-left: 8px;
        `    
    }

`;
