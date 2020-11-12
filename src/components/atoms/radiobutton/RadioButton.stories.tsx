import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { RadioButton } from './RadioButton';
import { RadioButtonProps } from './RadioButton.interface';

export default {
    title: 'Atoms/RadioButton',
    component: RadioButton,
    argTypes: {
        //backgroundColor: { control: 'color' },
        componentSize: { control: {type: 'select'}}
    },
decorators:  [(Story) => <Story/>]
} as Meta;

const Template: Story<RadioButtonProps> = (args) => {
    return <RadioButton {...args} />;
}


export const DefaultRadioButton = Template.bind({}); //Template.bind({}) makes a copy of the function

DefaultRadioButton.args = {
    componentSize: 'small',
    label: 'Label',
    hasLabel: true,
};