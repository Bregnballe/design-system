import styled, {css} from "styled-components";
import { IconProps } from './Icon.interface';


/*########### HIDING DEFAULT CHECKBOX ###########*/

export const IconStyled = styled.svg<IconProps>`
    pointer-events: none; //make sure click hits parent (Label)
    cursor: pointer;
    fill: ${props => props.theme.colors.primary};
    transition: transform 0.2s;


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

    /*########### FLIP ###########*/
    ${props =>
        props.flip === 'horizontal' ? 
        css`
            transform: scaleX(-1);
        `
        : props.flip === 'vertical' ? 
        css`
            transform: scaleY(-1);
        `
        :
        css`
            // nothing
        `
    }


    /*########### ROTATE ###########*/
    ${props =>
        props.rotate === '90' ? 
        css`
            transform: rotate(90deg)
        `
        : props.rotate === '180' ? 
        css`
            transform: rotate(180deg)
        `
        : props.rotate === '270' ? 
        css`
            transform: rotate(270deg)
        `
        :
        css`
            // nothing
        `
    }
`;