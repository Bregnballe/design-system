import styled from "styled-components";

import { ButtonProps } from './Button';

export const ButtonStyled = styled.button`
    background-color: ${({importance}:ButtonProps) => importance === 'primary' ? 'blue' : importance === 'secondary' ? 'grey' : 'transparent' };

    color: ${({importance}:ButtonProps) => importance === 'tertiary' ? 'blue' : 'white' };

    border-radius: 8px;

    font-size: ${({size}:ButtonProps) => size === 'large' ? "24px" : size === 'medium' ? "16px" : "12px" };

    padding: ${({size}:ButtonProps) => size === 'large' ? "24px" : size === 'medium' ? "16px" : "12px" };

    border-style: none;

    font-weight: 700;
`;
