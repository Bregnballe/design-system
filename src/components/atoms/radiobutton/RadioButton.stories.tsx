import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MyRadioButton, MyLabelRadioButton, MyLabelRadioButtonReversed } from './RadioButton.examples';
import { RadioButtonProps } from './RadioButton.interface';

export default {
    title: 'Atoms/RadioButton',
    component: MyLabelRadioButton,
    argTypes: {
        //backgroundColor: { control: 'color' },
        //componentSize: { control: {type: 'select'}}
    },
decorators:  [(Story) => <Story/>]
} as Meta;

export const DefaultRadioButton: Story<RadioButtonProps> = (args) => {
    return <MyLabelRadioButton asButton={args.asButton} checked={args.checked} componentSize={args.componentSize} layout={args.layout} fluid={args.fluid}/>;
}

DefaultRadioButton.args = {
    componentSize: 'small',
    asButton: false,
    checked: false,
    layout: 'flex-start',
    fluid: false,
};


export const RadioButton: Story<RadioButtonProps> = () => {
    return <MyRadioButton checked={false} componentSize="small" />;
}

export const RadioButtonReversed: Story<RadioButtonProps> = () => {
    return <MyLabelRadioButtonReversed checked={false} componentSize="small"/>;
}
