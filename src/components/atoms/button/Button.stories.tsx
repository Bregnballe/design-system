import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    //backgroundColor: { control: 'color' },
    importance: { control: 'select'}
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {

 console.log("Template: " + args)

 return <Button {...args} />;
}




export const Primary = Template.bind({}); //Template.bind({}) makes a copy of the function
Primary.args = {
  importance: 'primary',
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  importance: 'secondary',
  label: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  importance: 'tertiary',
  label: 'Tertiary',
};
