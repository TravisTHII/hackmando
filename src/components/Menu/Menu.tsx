import React from 'react'

import { MenuLink } from './MenuLink'
import { SubMenu } from './SubMenu'

export const Menu = () =>
  <div className="menu">

    <ul className="menu_list">

      <li className="menu_item">
        <MenuLink
          name="Home"
          slug="home"
          url="/home"
        />
      </li>

      <SubMenu />

      <li className="menu_item">
        <MenuLink
          name="About"
          slug="about"
          url="/about"
        />
      </li>

    </ul>

  </div>