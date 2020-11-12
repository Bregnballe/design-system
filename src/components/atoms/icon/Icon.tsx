import React from 'react';
import { IconStyled } from './Icon.styles';
import { IconProps } from './Icon.interface';


type icon = {
    [key: string]: string
}

const icons:icon = {
    check: "M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z",
    circle: "M 4, 12 a 8,8 0 1,1 16,0 a 8,8 0 1,1 -16,0"
}


    /*########### COMPONENT ###########*/
export const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
    return (
        <IconStyled                         
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            name={name} 
            {...rest}>
                <path d={icons[name]}></path>
        </IconStyled>
    );
};
