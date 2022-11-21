import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './icon';
import Button from '../Button/button';

export default {
  title: 'Icon',
  id: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const SingleIcon = Template.bind({});
SingleIcon.args = {
  theme: 'warning',
  icon: 'check',
  size: '3x',
};
SingleIcon.storyName = 'Check Icon';

export const defaultIcon = () => (
  <>
    <Icon icon="check" size="3x" />
    <Icon icon="anchor" size="3x" />
    <Icon icon="trash" size="3x" />
    <Icon icon="times" size="3x" />
    <Button btnType="primary" disabled={false} size="lg">
      <Icon icon="check" />
      check
    </Button>
  </>
);

export const iconWithTheme = () => (
  <>
    <Icon icon="check" size="3x" theme="success" />
    <Icon icon="times" size="3x" theme="danger" />
    <Icon icon="anchor" size="3x" theme="primary" />
    <Icon icon="exclamation-circle" size="3x" theme="warning" />
  </>
);

export const iconWithAction = () => (
  <>
    <Icon icon="spinner" size="3x" spin theme="primary" />
    <Icon icon="spinner" pulse size="3x" theme="success" />
  </>
);
