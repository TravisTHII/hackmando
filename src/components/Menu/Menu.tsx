import React from 'react'

import { useGlobalContext, ClientLink } from '../../context/Global'

import { MenuLink } from './MenuLink'

export function Menu() {

  const { projects } = useGlobalContext()

  const subMenu: ClientLink[] = []

  projects.forEach(p => {
    subMenu.push(p.clientLink)
  })

  const w = /\/projects\/(\w+)/.test(window.location.pathname)

  return (
    <div className="menu">
      <div className="menu_container">

        <ul className="menu_list">

          <li className="menu_item">
            <MenuLink
              name="Home"
              slug="home"
              url="/home"
            />
          </li>

          <li className="menu_item sub_menu">
            <span>
              <MenuLink
                name="Projects"
                slug={subMenu[0].slug}
                url={`/projects/${subMenu[0].slug}`}
                active={w}
              />
            </span>

            <ul className="projects_list sub_list">
              {subMenu.map(({ name, slug, url }, i) => (
                <li key={i} className="menu_link-sub">
                  <MenuLink
                    name={name}
                    slug={slug}
                    url={url}
                  />
                </li>
              ))}
            </ul>
          </li>

          <li className="menu_item">
            <MenuLink
              name="About"
              slug="about"
              url="/about"
            />
          </li>

        </ul>

      </div>
    </div>
  )
}