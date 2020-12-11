import React, { useState} from 'react';
import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';
import {InputGroup} from './InputGroup'
import {InputGroupProps} from './InputGroup.interface'


export const MyInputGroup: React.FC<InputGroupProps> = ({fluid, ...rest }) => {

    const [inputState, setInputState] = useState<string>("");

    const handleChange = (val:string) => {
        setInputState(val);
    };

    const handleClick = () => {
        console.log(inputState)
    };

    return (
        <InputGroup fluid={fluid} {...rest }>
            <Input fluid={fluid} {...rest } handleChange={handleChange} />
            <Button {...rest } handleClick={handleClick}>
                <span>Send</span>
            </Button>   
        </InputGroup>
    )

}


export const InputGroupReversed: React.FC<InputGroupProps> = ({fluid, ...rest }) => {

    const [inputState, setInputState] = useState<string>("");

    const handleChange = (val:string) => {
        setInputState(val);
    };

    const handleClick = () => {
        console.log(inputState)
    };

    return (
        <InputGroup fluid={fluid} {...rest }>
            <Button {...rest } handleClick={handleClick}>
                <span>Send</span>
            </Button>   
            <Input fluid={fluid} {...rest } handleChange={handleChange} />
        </InputGroup>
    )

}



