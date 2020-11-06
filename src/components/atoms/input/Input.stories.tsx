import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input } from './Input';
import { InputProps } from './Input.interface';

export default {
    title: 'Atoms/Input',
    component: Input,
    argTypes: {
        //backgroundColor: { control: 'color' },
        //color: { control: 'select'}
    },
decorators:  [(Story) => <Story/>]
} as Meta;

const Template: Story<InputProps> = (args) => {
    return <Input {...args} />;
}




export const DefaultInput = Template.bind({}); //Template.bind({}) makes a copy of the function
DefaultInput.args = {
    //textPlaceholder: 'Default',
    componentSize: 'small',
};
