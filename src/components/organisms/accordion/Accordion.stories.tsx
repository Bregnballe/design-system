import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { AccordionRow, AccordionTest, AccordionColumn } from './Accordion.examples';

import {toggleReducer} from '../../../reducers/toggleReducers/toggleReducer'
import {onlySelectOneReducer} from '../../../reducers/toggleReducers/onlySelectOneReducer'
import {preventUnselectAllReducer} from '../../../reducers/toggleReducers/preventUnselectAllReducer'
import {combineReducers} from '../../../reducers/toggleReducers/combineReducers'

export default {
    title: 'Organisms/Accordion',
    component: AccordionRow,
    argTypes: {
        //backgroundColor: { control: 'color' },
        //color: { control: {type: 'select'}} // control: 'select' does not work
    },
    decorators:  [(Story) => <Story/>]
    } as Meta;


export const DefaultAccordion: Story = (args) => (
    <AccordionRow {...args} />  
);    

DefaultAccordion.args = { 
    reducer: toggleReducer,
};

export const onlySelectOneAccordion: Story = (args) => (
    <AccordionRow {...args} />  
);    

onlySelectOneAccordion.args = { 
    reducer: combineReducers(onlySelectOneReducer, toggleReducer)
};

export const PreventCloseAccordion: Story = (args) => (
    <AccordionRow {...args} />  
);    

PreventCloseAccordion.args = { 
    reducer: combineReducers(preventUnselectAllReducer, onlySelectOneReducer, toggleReducer)
};


export const ColumnAccordion: Story = (args) => (
    <AccordionColumn {...args} />  
);    

ColumnAccordion.args = { 
    reducer: toggleReducer,
};


export const TestAccordion: Story = (args) => (
    <AccordionTest {...args} />  
);    

TestAccordion.args = { 
    reducer: toggleReducer,
};


