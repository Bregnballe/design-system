import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Link } from './Link';
import { LinkProps } from './Link.interface';

export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
decorators:  [(Story) => <Story/>]
} as Meta;

const Template: Story<LinkProps> = (args) => {
  return <Link {...args} />;
}

export const DefaultLink = Template.bind({}); //Template.bind({}) makes a copy of the function
DefaultLink.args = {
  label: 'Link',
  componentSize: 'small'
};
