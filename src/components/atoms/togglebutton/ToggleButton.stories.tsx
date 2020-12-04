import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MyToggleButton } from './ToggleButton.examples';
import { MyToggleButtonReversed } from './ToggleButton.examples';

export default {
    title: 'Atoms/ToggleButton',
    component: MyToggleButton,
    argTypes: {
        //backgroundColor: { control: 'color' },
        color: { control: {type: 'select'}} // control: 'select' does not work
    },
    decorators:  [(Story) => <Story/>]
    } as Meta;


export const DefaultToggleButton: Story = (args) => (
    <MyToggleButton {...args} />  
);    

DefaultToggleButton.args = { 
    color: 'primary',
    fluid: false
};

export const ToggleButtonReversed: Story = (args) => (
    <MyToggleButtonReversed {...args} />  
);    

ToggleButtonReversed.args = { 
    color: 'secondary',
    fluid: false
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
