import React from 'react'

import { MenuLink } from './MenuLink'

export function Menu() {

  const sub = [
    { name: "Comments", slug: "comments", url: "/projects/comments" },
    { name: "Search", slug: "search", url: "/projects/search" },
    { name: "Queue", slug: "queue", url: "/projects/queue" },
    { name: "Discover", slug: "discover", url: "/projects/discover" }
  ]

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
                slug="comments"
                url="/projects/comments"
                active={w}
              />
            </span>

            <ul className="projects_list sub_list">
              {sub.map((s, i) => (
                <li key={i} className="menu_link-sub">
                  <MenuLink
                    name={s.name}
                    slug={s.slug}
                    url={s.url}
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