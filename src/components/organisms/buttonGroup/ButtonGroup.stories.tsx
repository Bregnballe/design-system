import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { ButtonGroup } from './ButtonGroup';
import { Button } from '../../atoms/button/Button';
//import { ButtonGroupProps } from './ButtonGroup.interface';
//import { ButtonProps } from '../../atoms/button/Button.interface';
import { Secondary } from '../../atoms/button/Button.stories'


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


const ButtonGroupTemplate = ({ items, ...args }) => (
  <ButtonGroup {...args}>
    {items.map((item) => (
      <Button {...item} />
    ))}
  </ButtonGroup>
);

export const ThreeItems = ButtonGroupTemplate.bind({});
ThreeItems.args = { items: [Secondary.args, Secondary.args, Secondary.args] };

export const OneItem = ButtonGroupTemplate.bind({});
OneItem.args = { items: [Secondary.args] };

