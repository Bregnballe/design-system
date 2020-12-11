import styled, {css} from "styled-components";
import { IconProps } from './Icon.interface';


/*########### HIDING DEFAULT CHECKBOX ###########*/

export const IconStyled = styled.svg<IconProps>`

@keyframes scale {
    from {width: 0; height: 0;}
    to {width: 1em; height: 1em;}
}



    pointer-events: none; //make sure click hits parent (Label)
    cursor: pointer;
    fill: ${props => props.theme.colors.primary};
    transition: transform 0.2s;
    width: 1em;
    height: 1em;
    


    /*########### ANIMATION ###########*/
        ${props =>
        props.animation &&
        css`
            animation-name: scale;
            animation-duration: 0.15s;
            animation-timing-function: ease-out;
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