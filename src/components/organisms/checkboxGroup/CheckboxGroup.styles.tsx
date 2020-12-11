import styled, {css} from "styled-components";
import { CheckboxGroupProps } from './CheckboxGroup.interface';

export const CheckboxGroupStyled = styled.div<CheckboxGroupProps>`
    border: 0;
    display: inline-flex;

& > label {
    position: relative;
    margin: 0;

    &:not(:first-of-type):not(:last-of-type) {
        border-radius: 0;
    }

}



${props =>
props.direction === 'vertical' ? 
css`
    flex-direction: column;
    
    & > label {
        
        &:not(:last-of-type) {
            border-bottom-width: 0;

            &:focus-within {
                border-bottom-width: 0.167em; 
                //adding border when focused
            }

            &:focus-within + label {
                border-top-width: 0px; 
                // removing border from next element
            }
            
            &:not(:active):not(:focus-within) {
                box-shadow: none; //removing boxshadow on top items when not active or focused      
            }
        }
        
        &:first-of-type {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    
        &:last-of-type {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }
`
:
css`
    flex-direction: row;

    & > label {

        &:not(:last-of-type) {
            border-right-width: 0;

            &:focus-within {
                border-right-width: 0.167em; 
                //adding border when focused
            }

            &:focus-within + label {
                border-left-width: 0px; 
                // removing border from next element
            }
        }

        &:first-of-type {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    
        &:last-of-type {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
    }
}

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
