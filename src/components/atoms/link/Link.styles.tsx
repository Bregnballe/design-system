import styled from "styled-components";
import { LinkProps } from './Link.interface';


export const LinkStyled = styled.a<LinkProps>`
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.bodyText};
    &:focus {
        box-shadow:  0px 0px 0px 1px #fff, 0px 0px 0px 3px ${props => props.theme.colors.primary};
        outline: none;
    }
    &:hover {
        text-decoration: underline;
    }

`