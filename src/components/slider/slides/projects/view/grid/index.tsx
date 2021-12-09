import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import { useProjectsContext } from '../../../../../../context/projects'

import { Card } from './Card'
import { Controller } from './Controller'

export const Grid = () => {
  const { projects, offset, resetCarousel } = useProjectsContext()

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
      <div className="project_carousel_container">
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
      </div>
      <Controller />
    </div>
  )
}
