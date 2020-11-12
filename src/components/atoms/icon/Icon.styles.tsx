import styled, {css} from "styled-components";
import { IconProps } from './Icon.interface';


/*########### HIDING DEFAULT CHECKBOX ###########*/

export const IconStyled = styled.svg<IconProps>`
    pointer-events: none; //make sure click hits parent (Label)
    cursor: pointer;
    fill: ${props => props.theme.colors.primary};


    /*########### SIZE ###########*/
    ${props =>
        props.componentSize === 'large' ? 
        css`
            width: calc(12px*2);
            height: calc(12px*2);
        `
        : props.componentSize === 'medium' ?
        css`
            width: calc(12px*1.5);
            height: calc(12px*1.5);
        ` 
        : 
        css `
            width: 12px;
            height: 12px;
        `    
    }
`;