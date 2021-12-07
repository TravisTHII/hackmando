import React from 'react'
import { useSpring, animated } from 'react-spring'

import { useGlobalContext } from '../../context/global'

import { About, Contact, Projects } from './slides'

export const Slider = () => {
  const { move } = useGlobalContext()

  const [styles, api] = useSpring(() => ({
    transform: `translate3d(0%, 0, 0)`,
  }))

  // Update spring with new props
  api.start({ transform: `translate3d(${move}, 0, 0)` })

  return (
    <animated.div id="slider" style={styles}>
      <About />
      <Projects />
      <Contact />
    </animated.div>
  )
}
