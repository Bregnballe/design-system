import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { ButtonGroup } from './ButtonGroup';
import { ButtonGroupProps } from './ButtonGroup.interface';
import { Button } from '../../atoms/button/Button';
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


const ButtonGroupTemplate: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <Button label="hello" {...args}/>
    <Button label="hello" {...args}/>
    <Button label="hello" {...args}/>
  </ButtonGroup>
);    

export const DefaultButtonGroup = ButtonGroupTemplate.bind({});
DefaultButtonGroup.args = { componentSize: "small", color: "secondary", direction: "horizontal" };




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