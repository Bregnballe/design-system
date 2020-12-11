import React, { FC, useState } from 'react';
import { InputProps } from './Input.interface';
import { InputStyled } from './Input.styled';


    /*########### COMPONENT ###########*/
export const Input: FC<InputProps> = ({textPlaceholder, textAlign, fluid, componentSize, ...rest}) => {
    const [inputState, setInputState] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputState(e.currentTarget.value);

        rest.handleChange && rest.handleChange(e.currentTarget.value)
        // if a parent has sent a handle change callback function, update state of parent
        };


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>):void => {
        if (e.key === 'Enter') {
            console.log(inputState);
        }
    };

    return (
        <InputStyled value={inputState} textAlign={textAlign} fluid={fluid} componentSize={componentSize} placeholder={textPlaceholder}  onKeyDown={handleKeyDown} onChange={handleChange}  />
    );
};
