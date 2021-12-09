import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import { useProjectsContext } from '../../../../../context/projects'

import { Card } from './Card'

export const Grid = () => {
  const { projects, page, offset, last, traverseCarousel, resetCarousel } =
    useProjectsContext()

  const links = []

  for (let i = 1; i < last + 1; i++) {
    links.push(i)
  }

  useEffect(() => {
    return () => resetCarousel()
  }, [resetCarousel])

  const [styles, api] = useSpring(() => ({
    transform: `translate3d(0px, 0, 0)`,
  }))

  // Update spring with new props
  api.start({ transform: `translate3d(${offset}px, 0, 0)` })

  return (
    <div className="project_carousel">
      <animated.div
        className="carousel"
        style={{
          width: `${1050 * projects.length + (projects.length - 1) * 50}px`,
          ...styles,
        }}
      >
        {projects.map((project, i) => (
          <Card key={i} {...project} />
        ))}
      </animated.div>
      <ul className="carousel_buttons">
        {links.map((n, i) => (
          <li key={i}>
            <button
              className={`carousel_button${page === n ? ' cb_active' : ''}`}
              onClick={() => traverseCarousel(n)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  )
}
