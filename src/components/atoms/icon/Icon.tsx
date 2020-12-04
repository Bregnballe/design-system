import React from 'react';
import { IconStyled } from './Icon.styles';
import { IconProps } from './Icon.interface';


type icon = {
    [key: string]: string
}

const icons:icon = {
    check: "M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z",
    circle: "M 4, 12 a 8,8 0 1,1 16,0 a 8,8 0 1,1 -16,0",
    chevronDown: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
    chevronRight: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}


    /*########### COMPONENT ###########*/
export const Icon: React.FC<IconProps> = ({ name, flip, rotate, ...rest }) => {
    return (
        <IconStyled                         
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            name={name} 
            flip={flip}
            rotate={rotate}
            {...rest}>
                <path d={icons[name]}></path>
        </IconStyled>
    );
};
