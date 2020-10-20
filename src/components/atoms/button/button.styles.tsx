import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color: ${(props:{importance:string}) => props.importance === 'primary' ? 'blue' : props.importance === 'secondary' ? 'grey' : 'transparent' };

    color: ${(props:{importance:string}) => props.importance === 'tertiary' ? 'blue' : 'white' };

    border-radius: 8px;

    font-size: ${(props:{size:string}) => props.size === 'large' ? "24px" : props.size === 'medium' ? "16px" : "12px" };

    padding: ${(props:{size:string}) => props.size === 'large' ? "24px" : props.size === 'medium' ? "16px" : "12px" };

    border-style: none;

    font-weight: 700;
`;
