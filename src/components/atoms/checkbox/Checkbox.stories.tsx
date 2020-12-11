import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MyCheckbox, MyLabelCheckbox, MyLabelCheckboxReversed } from './Checkbox.examples';
import { CheckboxProps } from './Checkbox.interface';

export default {
    title: 'Atoms/Checkbox',
    component: MyLabelCheckbox,
    argTypes: {
        //backgroundColor: { control: 'color' },
        //componentSize: { control: {type: 'select'}}
    },
decorators:  [(Story) => <Story/>]
} as Meta;

export const DefaultCheckbox: Story<CheckboxProps> = (args) => {
    return <MyLabelCheckbox asButton={args.asButton} checked={args.checked} componentSize={args.componentSize} layout={args.layout} fluid={args.fluid} />;
}

DefaultCheckbox.args = {
    componentSize: 'small',
    asButton: false,
    checked: false,
    layout: 'flex-start',
    fluid: false,
};

export const Checkbox: Story<CheckboxProps> = () => {
    return <MyCheckbox checked={false} componentSize="small" />;
}

export const CheckboxReversed: Story<CheckboxProps> = () => {
    return <MyLabelCheckboxReversed checked={false} componentSize="small"/>;
}

