import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MyCheckbox } from './Checkbox.examples';
import { CheckboxProps } from './Checkbox.interface';

export default {
    title: 'Atoms/Checkbox',
    component: MyCheckbox,
    argTypes: {
        //backgroundColor: { control: 'color' },
        componentSize: { control: {type: 'select'}}
    },
decorators:  [(Story) => <Story/>]
} as Meta;

export const DefaultCheckbox: Story<CheckboxProps> = (args) => {
    return <MyCheckbox {...args} />;
}

DefaultCheckbox.args = {
    componentSize: 'small',
};
