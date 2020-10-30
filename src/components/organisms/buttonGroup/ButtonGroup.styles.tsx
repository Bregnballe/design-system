import styled, {css} from "styled-components";
import { ButtonGroupProps } from './ButtonGroup.interface';

export const ButtonGroupStyled = styled.div<ButtonGroupProps>`
    display: inline-flex;

    & > button {
        position: relative;
        margin: 0;

        &:not(:first-child):not(:last-child) {
            border-radius: 0;
        }
    
        &:focus {
            z-index: 1;
        }
    }



    ${({theme: {borderRadius}, ...props}) =>
    props.direction === 'vertical' ? 
    css`
        flex-direction: column;
        
        & > button {
            
            &:not(:last-child) {
                border-bottom-width: 0;
            }
            
            &:first-child {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        
            &:last-child {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
        }
    `
    :
    css`
        flex-direction: row;

        & > button {

            &:not(:last-child) {
                border-right-width: 0;
            }

            &:first-child {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
        
            &:last-child {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
        }
    }
    
    `
}

`;