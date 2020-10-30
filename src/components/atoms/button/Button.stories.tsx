import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from './Button';
import { ButtonProps } from './Button.interface';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    //backgroundColor: { control: 'color' },
    color: { control: 'select'},
  },
decorators:  [(Story) => <Story/>]
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
}




export const Primary = Template.bind({}); //Template.bind({}) makes a copy of the function
Primary.args = {
  color: 'primary',
  label: 'Primary',
  size: 'small'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Secondary',
  size: 'small'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary',
  label: 'Tertiary',
  size: 'small'
};
