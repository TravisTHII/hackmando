import React from 'react'

import { useProjectsContext } from '../../../../../../context/projects'

export const Controller = () => {
  const { projects, page, traverseCarousel, changeColor } = useProjectsContext()

  const links = projects.map((_, index) => index + 1)

  return (
    <ul className="carousel_controller">
      {links.map((link, i) => (
        <li key={i}>
          <button
            className={`carousel_button${page === link ? ' cb_active' : ''}`}
            aria-label="carousel button"
            onClick={() => {
              traverseCarousel(link)
              changeColor(projects[link - 1].color)
            }}
          ></button>
        </li>
      ))}
    </ul>
  )
}
