import { FC } from 'react';
import Menu, { MenuProps } from './menu';
import SubMenu, { SubMenuProps } from './subMenu';
import MenuItem, { MenuItemProps } from './menuItem';

export type IMenuComponent = Partial<
  FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
  }
>;

const TransMenu: IMenuComponent = Menu as IMenuComponent;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
