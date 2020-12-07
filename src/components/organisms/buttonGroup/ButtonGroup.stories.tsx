import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ButtonGroup } from './ButtonGroup';
import { ButtonGroupProps } from './ButtonGroup.interface';
import { Button } from '../../atoms/button/Button';
import { Icon } from '../../atoms/icon/Icon';
//import { ButtonProps } from '../../atoms/button/Button.interface';


export default {
  title: 'Organisms/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    direction: { control: 'select'},
    //numChildren: { control: 'range', min: 2, max: 20 }
    //backgroundColor: { control: 'color' },
  },
decorators:  [(Story) => <Story/>]
} as Meta;


export const DefaultButtonGroup: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <Button {...args}>Hey</Button>
    <Button {...args}>Hey</Button>
    <Button {...args}>Hey</Button>
  </ButtonGroup>
);    

DefaultButtonGroup.args = { componentSize: "small", color: "secondary", direction: "horizontal" };


export const FluidButtonGroup: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <Button fluid {...args}>Hey</Button>
    <Button fluid {...args}>Hey</Button>
    <Button fluid {...args}>Hey</Button>
  </ButtonGroup>
);    

FluidButtonGroup.args = { fluid: true, componentSize: "small", color: "secondary", direction: "horizontal", layout: "center" };


export const IconButtonGroup: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <Button {...args}><Icon name="check" componentSize="small" color="primary"/></Button>
    <Button {...args}><Icon name="check" componentSize="small" color="primary"/></Button>
    <Button {...args}><Icon name="check" componentSize="small" color="primary"/></Button>
  </ButtonGroup>
);    

IconButtonGroup.args = { componentSize: "small", color: "primary", direction: "horizontal" };









/*

import { Button } from '../../atoms/button/Button';
import { ButtonProps } from '../../atoms/button/Button.interface';
import { Secondary } from '../../atoms/button/Button.stories'


const ButtonGroupTemplate: Story<ButtonGroupProps> = ({ items, ...args }) => (
  <ButtonGroup {...args}>
    {items!.map((item:ButtonProps, i:number) => (
      <Button {...item} key={i}/>

      // items! won't be undefined "!"
    ))}
  </ButtonGroup>
);

export const ThreeItems = ButtonGroupTemplate.bind({});

ThreeItems.args = { items: [Secondary.args, Secondary.args, Secondary.args] };
*/