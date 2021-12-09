import React from 'react'
import { useSpring, animated } from 'react-spring'

import { useProjectsContext } from '../../../../context/projects'

import { Controller } from './Controller'
import { View } from './view'

export const ProjectsSlide = () => {
  const { color } = useProjectsContext()

  const [styles, api] = useSpring(() => ({
    backgroundColor: color,
  }))

  // Update spring with new props
  api.start({
    to: { backgroundColor: color },
    from: { backgroundColor: color },
  })

  return (
    <animated.div id="projects" className="slide projects" style={styles}>
      <div className="slide_container">
        <div className="projects_container flex_ui">
          <div className="projects_content flex_ui">
            <Controller />
            <View />
          </div>
        </div>
      </div>
    </animated.div>
  )
}
