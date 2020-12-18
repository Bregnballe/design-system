import styled,{css} from "styled-components";
import { InputGroupProps } from './InputGroup.interface';

export const InputGroupStyled = styled.div<InputGroupProps>`
    display: inline-flex;
    vertical-align: top;

    & > :first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    & > :last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    & > :first-child > input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    & > :last-child > input {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }




/*########### FLUID ###########*/
${props =>

props.fluid && 
css`
width:              100%;
`
}


`;