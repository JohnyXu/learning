import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';

import Menu from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

export default {
  title: 'Menu',
  id: 'Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

export const defaultMenu = () => (
  <Menu
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <SubMenu title="下拉选项">
      <MenuItem>下拉选项一</MenuItem>
      <MenuItem>下拉选项二</MenuItem>
    </SubMenu>
  </Menu>
);

export const menuWithVertical = () => (
  <Menu
    mode="vertical"
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <SubMenu title="点击下拉选项">
      <MenuItem>下拉选项一</MenuItem>
      <MenuItem>下拉选项二</MenuItem>
    </SubMenu>
  </Menu>
);

export const menuWithOpened = () => (
  <Menu
    mode="vertical"
    defaultOpenSubMenus={['2']}
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <SubMenu title="默认展开下拉选项">
      <MenuItem>下拉选项一</MenuItem>
      <MenuItem>下拉选项二</MenuItem>
    </SubMenu>
  </Menu>
);
