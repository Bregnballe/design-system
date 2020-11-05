import styled from "styled-components";
import { ButtonInputProps } from './ButtonInput.interface';

export const ButtonInputStyled = styled.div<ButtonInputProps>`
    display: inline-flex;
    vertical-align: top;

    & > :first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right-width: 0;
    }

    & > :last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

`;