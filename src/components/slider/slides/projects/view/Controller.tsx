import React from 'react'

import { useProjectsContext } from '../../../../../context/projects'

export const Controller = () => {
  const { projects, page, last, traverseCarousel, changeColor } =
    useProjectsContext()

  const links = []

  for (let i = 1; i < last + 1; i++) {
    links.push(i)
  }

  return (
    <ul className="carousel_controller">
      {links.map((n, i) => (
        <li key={i}>
          <button
            className={`carousel_button${page === n ? ' cb_active' : ''}`}
            onClick={() => {
              traverseCarousel(n)
              changeColor(projects[n - 1].color)
            }}
          ></button>
        </li>
      ))}
    </ul>
  )
}
