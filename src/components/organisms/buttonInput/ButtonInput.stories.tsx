import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { ButtonInput } from './ButtonInput';
//import { Button } from '../../atoms/button/Button';
//import { Input } from '../../atoms/input/Input';
import { Primary } from '../../atoms/button/Button.stories'
import { DefaultInput } from '../../atoms/input/Input.stories'

export default {
    title: 'Organisms/ButtonInput',
    component: ButtonInput,
    decorators:  [(Story) => <Story/>]
    } as Meta;


export const DefaultButtonInput = (args) => (
    <ButtonInput>
        <DefaultInput placeholder="hello"/>
        <Primary label="send" color="primary"/>
    </ButtonInput>
)    