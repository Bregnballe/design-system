import React, { FC, useState } from 'react';
import { InputProps } from './Input.interface';
import { InputStyled } from './Input.styled';


    /*########### COMPONENT ###########*/
export const Input: FC<InputProps> = ({componentSize, textPlaceholder="Type something"}) => {
    const [inputState, setInputState] = useState<String>("");

    /*########### CHANGE INPUT STATE ###########*/
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputState(e.currentTarget.value);
        };


    /*########### ENTER ###########*/
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>):void => {
        if (e.key === 'Enter') {
            console.log(inputState);
        }
    };

    return (
        <InputStyled placeholder={textPlaceholder} componentSize={componentSize} onKeyDown={handleKeyDown} onChange={handleChange} />
    );
};
