import React, { useState} from 'react';
import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';
import {InputGroup} from './InputGroup'
import {InputGroupProps} from './InputGroup.interface'


export const MyInputGroup: React.FC<InputGroupProps> = ({color, componentSize, textPlaceholder }) => {

    const [inputState, setInputState] = useState<string>("");

    const handleChange = (val:string) => {
        setInputState(val);
    };

    const handleClick = () => {
        console.log(inputState)
    };

    return (
        <InputGroup componentSize={componentSize} color={color}>
            <Input componentSize={componentSize} textPlaceholder={textPlaceholder} handleChange={handleChange} />
            <Button componentSize={componentSize} color={color} handleClick={handleClick}>
                <span>Send</span>
            </Button>   
        </InputGroup>
    )

}


export const InputGroupReversed: React.FC<InputGroupProps> = ({color, componentSize, textPlaceholder }) => {

    const [inputState, setInputState] = useState<string>("");

    const handleChange = (val:string) => {
        setInputState(val);
    };

    const handleClick = () => {
        console.log(inputState)
    };

    return (
        <InputGroup componentSize={componentSize} color={color}>
            <Button componentSize={componentSize} color={color} handleClick={handleClick}>
                <span>Send</span>
            </Button>   
            <Input componentSize={componentSize} textPlaceholder={textPlaceholder} handleChange={handleChange} />
        </InputGroup>
    )

}



