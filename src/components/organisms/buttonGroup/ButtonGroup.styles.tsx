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



    ${props =>
    props.direction === 'vertical' ? 
    css`
        flex-direction: column;
        
        & > button {
            
            &:not(:last-child) {
                border-bottom-width: 0;
                
                &:not(:active):not(:focus) {
                    box-shadow: none; //removing boxshadow on top items when not active or focused      
                }
            }
            
            &:first-child {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        
            &:last-child {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
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

    /*########### FLUID ###########*/
    ${props =>

    props.fluid && 
    css`
    width:              100%;
    text-align:         center;
    `
    }

`;