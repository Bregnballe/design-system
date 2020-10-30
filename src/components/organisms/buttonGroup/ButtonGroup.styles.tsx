import styled, {css} from "styled-components";
import { ButtonGroupProps } from './ButtonGroup.interface';

export const ButtonGroupStyled = styled.div<ButtonGroupProps>`
    display: inline-flex;

    & > button {
        position: relative;
        margin: 0;
        border-radius: 0px;
    
        &:focus {
            z-index: 1;
        }
    }



    ${({theme: {borderRadius}, ...props}) =>
    props.direction === 'vertical' ? 
    css`
        flex-direction: column;
        
        & > button {

            border-width: 2px 2px 0px 2px;

            &:first-child {
                border-radius: ${borderRadius} ${borderRadius} 0px 0px;
            }
        
            &:last-child {
                border-radius: 0px 0px ${borderRadius} ${borderRadius};
                border-width: 2px;
        }
    `
    :
    css`
        flex-direction: row;

        & > button {
            border-width: 2px 0px 2px 2px;

            &:first-child {
                border-radius:${borderRadius} 0px 0px ${borderRadius};
            }
        
            &:last-child {
                border-radius: 0px ${borderRadius} ${borderRadius} 0px;
                border-width: 2px;
        }
    }
    
    `
}

`;