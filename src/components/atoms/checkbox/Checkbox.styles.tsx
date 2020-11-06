import styled, {css} from "styled-components";
import { mix } from 'polished'
import { CheckboxProps } from './Checkbox.interface';


/*########### HIDING DEFAULT CHECKBOX ###########*/

export const CheckboxStyled = styled.input.attrs({ type: "checkbox" })`
    position: absolute;
    top: 0;
    left: 0;
    clip-path: circle(0%);
    padding: 0;
    border: 0;
    width: 20px;
    height: 20px;
    overflow: hidden;
    cursor: pointer;
`;

/*########### STYLING LABEL AS CHECKBOX ###########*/

export const LabelStyled = styled.label<CheckboxProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    background-color: #fff;
    border-style: solid;
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;
    transition: box-shadow 0.2s;


    &:focus-within {
        box-shadow: 0px 0px 0px 1px #fff, 0px 0px 0px 3px ${props => props.theme.colors.primary};
    }
    

    /*########### CHECKED STATUS ###########*/
    ${({theme: {colors}, ...props}) =>
            props.checked === true ? 
            css`
                border-color: ${colors.primary};
                &:hover {
                    border-color: ${mix(0.2, "black", colors.primary)};
                }
            `
            : 
            css `
                border-color: ${colors.neutral};
                &:hover {
                    border-color: ${mix(0.2, "black", colors.neutral)};
                }
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



export const CheckStyled = styled.svg<CheckboxProps>`
    pointer-events: none;
    cursor: pointer;
    display: ${props => (props.checked ? "inline" : "none")};
    fill: ${props => props.theme.colors.primary};


    /*########### SIZE ###########*/
    ${props =>
        props.componentSize === 'large' ? 
        css`
            width: calc(13px*2);
            height: calc(13px*2);
        `
        : props.componentSize === 'medium' ?
        css`
            width: calc(13px*1.5);
            height: calc(13px*1.5);
        ` 
        : 
        css `
            width: 13px;
            height: 13px;
        `    
    }
`;
