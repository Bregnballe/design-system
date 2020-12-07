import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MyInputGroup, InputGroupReversed } from './InputGroup.examples';


export default {
    title: 'Organisms/InputGroup',
    component: MyInputGroup,
    argTypes: {
        //backgroundColor: { control: 'color' },
        //color: { control: {type: 'select'}} // control: 'select' does not work
    },
    decorators:  [(Story) => <Story/>]
    } as Meta;


export const DefaultInputGroup: Story = (args) => (
    <MyInputGroup componentSize={args.componentSize} color={args.color} textPlaceholder={args.textPlaceholder}/>   
);    

DefaultInputGroup.args = { 
    componentSize: "small", 
    color: "primary", 
    textPlaceholder: "Type something" 
};


export const ReversedInputGroup: Story = () => (
    <InputGroupReversed componentSize="small" color="primary" textPlaceholder="Type something" />   
);    
