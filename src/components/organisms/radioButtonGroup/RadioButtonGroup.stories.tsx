import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MyRadioButtonGroup } from './RadioButtonGroup.examples';


export default {
    title: 'Organisms/RadioButtonGroup',
    component: MyRadioButtonGroup,
    argTypes: {
        //backgroundColor: { control: 'color' },
        //color: { control: {type: 'select'}} // control: 'select' does not work
    },
    decorators:  [(Story) => <Story/>]
    } as Meta;


export const DefaultRadioButtonGroup: Story = (args) => (
    <MyRadioButtonGroup componentSize={args.componentSize} asButton={args.asButton} direction={args.direction} fluid={args.fluid} layout={args.layout}/>   
);    

DefaultRadioButtonGroup.args = { 
    direction: "vertical",
    componentSize: "small", 
    asButton: false,
    fluid: false,
    layout: "flex-start",
};
