import styled, {css} from "styled-components";
import { LabelProps } from './Label.interface';

export const LabelStyled = styled.span<LabelProps>`
pointer-events: none; //make sure click hits parent (Label)

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
    : 
    css `
        font-size: 1rem;
    `    
}

`;
