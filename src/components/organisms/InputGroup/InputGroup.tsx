import React, { useState} from 'react';

import { InputGroupStyled } from './InputGroup.styles';
import { InputGroupProps } from './InputGroup.interface';


export const InputGroup: React.FC<InputGroupProps> = (props) => {
    
    const [inputState, setInputState] = useState<string>("");

    /*########### CHANGE INPUT STATE ###########*/
    const handleChange = (val:string) => {
        setInputState(val);
    };


    /*########### CLICK ###########*/
    const handleClick = () => {
        console.log(inputState)
    };
    

    return (
    <InputGroupStyled  {...props }>
        {React.Children.map(props.children, child => {
            //@ts-ignore
            return React.cloneElement(child, { handleChange, handleClick, inputState })
            // PROBLEM: passing handleCLick and handleChange to both children
        })}
    </InputGroupStyled>
    )
};
