import React, { useState } from 'react';
import { InputProps } from './Input.interface';
import { InputStyled } from './Input.styled';



    /*########### COMPONENT ###########*/
export const Input: React.FC<InputProps> = ({...props}) => {
    const [inputState, setInputState] = useState("");

    /*########### CHANGE INPUT STATE ###########*/
const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputState(e.currentTarget.value);
    };


/*########### ENTER ###########*/
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        console.log(inputState);
    }
};

    return (
        <InputStyled {...props}  onChange={handleChange} onKeyDown={handleKeyDown}/>
    );
};
