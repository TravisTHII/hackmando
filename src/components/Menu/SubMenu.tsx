import React from 'react'

import { useGlobalContext } from '../../context/Global'

import { MenuLink } from './MenuLink'

import { ClientLink } from '../../types'

export function SubMenu() {

  const { projects } = useGlobalContext()

  const subMenu: ClientLink[] = []

  projects.forEach(p => {
    subMenu.push(p.clientLink)
  })

  const w = /\/projects\/(\w+)/.test(window.location.pathname)

  return (
    <li className="sub_menu">
      <div className="sub_menu_item">
        <MenuLink
          name="Projects"
          slug={subMenu[0].slug}
          url={`/projects/${subMenu[0].slug}`}
          active={w}
        />
      </div>

      <ul className="sub_menu_list">
        {subMenu.map(({ name, slug, url }, i) => (
          <li key={i}>
            <MenuLink
              name={name}
              slug={slug}
              url={url}
            />
          </li>
        ))}
      </ul>
    </li>
  )
}