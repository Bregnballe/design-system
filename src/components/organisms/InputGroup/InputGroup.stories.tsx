import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { InputGroup } from './InputGroup';
import { InputGroupProps } from './InputGroup.interface';
import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';

export default {
    title: 'Organisms/InputGroup',
    component: InputGroup,
    argTypes: {
        //backgroundColor: { control: 'color' },
        color: { control: {type: 'select'}} // control: 'select' does not work
    },
    decorators:  [(Story) => <Story/>]
    } as Meta;


export const DefaultInputGroup: Story<InputGroupProps> = (args) => (
    <InputGroup {...args}>
        <Input {...args}/>
        <Button {...args}/>
    </InputGroup>    
);    

DefaultInputGroup.args = { 
    componentSize: "small", 
    color: "primary", 
    label: "Send", 
    textPlaceholder: "Type something" 
};

export const ReversedInputGroup: Story<InputGroupProps> = (args) => (
    <InputGroup {...args}>
        <Button {...args}/>
        <Input {...args}/>
    </InputGroup>    
);  

ReversedInputGroup.args = { 
    componentSize: "small", 
    color: "primary", 
    label: "Send", 
    textPlaceholder: "Type something" 
};

/*
const ButtonInputTemplate = ({...args }) => (
    <ButtonInput {...args}>
        <Input {...args } placeholder="Type name" />
        <Button {...args } label="Send"/>
    </ButtonInput>
);    

export const DefaultButtonInput = ButtonInputTemplate.bind({});
DefaultButtonInput.args = { size: "small", color: "primary" };

//Full control over all children's args

const ButtonInputTemplate = ({button, input, size, color, ...args }) => (
    <ButtonInput {...args} size={size} color={color}>
        <Input {...input} size={size}  />
        <Button {...button} size={size} color={color} />
    </ButtonInput>
);    

export const DefaultButtonInput = ButtonInputTemplate.bind({});
DefaultButtonInput.args = { size: "small", color: "primary", input: DefaultInput.args, button: Primary.args };

*/
