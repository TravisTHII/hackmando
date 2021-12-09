import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useSpring, animated } from 'react-spring'

import { useGlobalContext } from '../../context/global'

import { About, Contact, Projects } from './slides'

import { calcMove } from '../../utils'

export const Slider = () => {
  const { currentPanel, move, updatePanel } = useGlobalContext()

  const { pathname } = useLocation()

  useEffect(() => {
    const path = pathname.replace('/', '')
    const panel = path ? path : 'about'

    updatePanel(panel, calcMove(panel))
  }, [currentPanel, pathname, updatePanel])

  const [styles, api] = useSpring(() => ({
    transform: `translate3d(0%, 0, 0)`,
  }))

  // Update spring with new props
  api.start({ transform: `translate3d(${move}%, 0, 0)` })

  return (
    <animated.div id="slider" style={styles}>
      <About />
      <Projects />
      <Contact />
    </animated.div>
  )
}
