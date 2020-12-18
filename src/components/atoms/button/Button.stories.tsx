import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from './Button';
import { Icon } from '../../atoms/icon/Icon';
import { ButtonProps } from './Button.interface';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
decorators:  [(Story) => <Story/>]
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args}><span>Button</span></Button>;
}


export const Primary = Template.bind({}); //Template.bind({}) makes a copy of the function
Primary.args = {
  color: 'primary',
  componentSize: 'small',
  fluid: false,
  layout: 'center'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  componentSize: 'small',
  fluid: false,
  layout: 'center'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary',
  componentSize: 'small',
  fluid: false,
  layout: 'center'
};


export const Quaternary = Template.bind({});
Quaternary.args = {
  color: 'quaternary',
  componentSize: 'small',
  fluid: false,
  layout: 'center'
};



export const IconButton: Story<ButtonProps> = (args) => {
  return <Button {...args}><Icon color="primary" name="check" /></Button>;
}

IconButton.args = {
  color: 'primary',
  ariaLabel: 'Check'
};



export const IconAndTextButton: Story<ButtonProps> = (args) => {
  return <Button {...args}><Icon color="primary" name="check" /><span>Hey</span></Button>;
}

IconAndTextButton.args = {
  color: 'primary',
};

