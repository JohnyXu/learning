import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './input';

export default {
  title: 'Input',
  id: 'Input',
  component: Input,
  onChange: { action: 'changed' },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  value: 'input something',
};
DefaultInput.storyName = 'Default Input';

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  placeholder: 'disabled input',
  disabled: true,
};
DisabledInput.storyName = 'Disabled Input';

export const iconInput = () => (
  <Input style={{ width: '300px' }} placeholder="input with icon" icon="search" />
);

export const sizeInput = () => (
  <>
    <Input style={{ width: '300px' }} defaultValue="large size" size="lg" />
    <Input style={{ width: '300px' }} placeholder="small size" size="sm" />
  </>
);

export const pandInput = () => (
  <>
    <Input style={{ width: '300px' }} defaultValue="prepend text" prepend="https://" />
    <Input style={{ width: '300px' }} defaultValue="google" append=".com" />
  </>
);
