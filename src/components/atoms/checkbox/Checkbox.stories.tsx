import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.interface';

export default {
    title: 'Atoms/Checkbox',
    component: Checkbox,
    argTypes: {
        //backgroundColor: { control: 'color' },
        size: { control: {type: 'select'}}
    },
decorators:  [(Story) => <Story/>]
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
    return <Checkbox {...args} />;
}


export const DefaultCheckbox = Template.bind({}); //Template.bind({}) makes a copy of the function

DefaultCheckbox.args = {
    size: 'small',
    checked: false,
};
