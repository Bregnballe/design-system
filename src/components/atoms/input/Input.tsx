import React, { FC, useState } from 'react';
import { InputProps } from './Input.interface';
import { InputStyled } from './Input.styled';


    /*########### COMPONENT ###########*/
export const Input: FC<InputProps> = ({componentSize, textPlaceholder, ...props}) => {
    const [inputState, setInputState] = useState<string>("");

    /*########### CHANGE INPUT STATE ###########*/
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputState(e.currentTarget.value);

        if (props.handleChange) {
            props.handleChange(e.currentTarget.value)
        }
        // if a parent has sent a handle change callback function, update state of parent
        };


    /*########### ENTER ###########*/
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>):void => {
        if (e.key === 'Enter') {
            console.log(inputState);
        }
    };

    return (
        <InputStyled value={inputState} placeholder={textPlaceholder} componentSize={componentSize} onKeyDown={handleKeyDown} onChange={handleChange} />
    );
};
