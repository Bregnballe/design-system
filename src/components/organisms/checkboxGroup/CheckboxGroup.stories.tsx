import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MyCheckboxGroup } from './CheckboxGroup.examples';


import {toggleReducer} from '../../../reducers/toggleReducers/toggleReducer'

export default {
    title: 'Organisms/CheckboxGroup',
    component: MyCheckboxGroup,
    argTypes: {
        //backgroundColor: { control: 'color' },
        //color: { control: {type: 'select'}} // control: 'select' does not work
    },
    decorators:  [(Story) => <Story/>]
    } as Meta;


export const DefaultCheckboxGroup: Story = (args) => (
    <MyCheckboxGroup componentSize={args.componentSize} asButton={args.asButton} direction={args.direction} fluid={args.fluid} layout={args.layout} reducer={args.reducer}/>   
);    

DefaultCheckboxGroup.args = { 
    reducer: toggleReducer,
    direction: "vertical",
    componentSize: "small", 
    asButton: false,
    fluid: false,
    layout: "flex-start",
};
