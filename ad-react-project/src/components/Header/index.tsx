import React, { PureComponent } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { MENU_INDEX_CONFIG } from '@/common/constants/menu';
import MenuItem from './MenuItem'
import './style.scss'

interface IProps {
  history?: any;
}

interface IStates { }

class Header extends PureComponent<IProps, IStates> {
  state = {}
  render() {
    return (
      <div className="header-component-box">
        <div className="left">
          <div className="logo"></div>
          <div className="menu">
            {
              MENU_INDEX_CONFIG.map((menuItem, index) => (
                <MenuItem
                  menuItemInfo={menuItem}
                  isActive={menuItem.isActive}
                  key={`index-menu-item${index.toString()}`}
                />
              ))
            }
          </div>
        </div>
        <div className="user-info">
          <UserOutlined />
          <span className="user-name">JackeyLove</span>
        </div>
      </div>
    )
  }
}

export default Header
