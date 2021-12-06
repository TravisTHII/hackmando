import React, { useEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring'

import { useGlobalContext } from '../../context/global'

export const Slider = () => {
  const [move, setMove] = useState('')

  const { currentPanel } = useGlobalContext()

  useEffect(() => {
    switch (currentPanel) {
      case 'home':
        setMove('0%')
        break
      case 'projects':
        setMove('-100%')
        break
      case 'about':
        setMove('-200%')
        break
    }

    return () => setMove('')
  }, [currentPanel])

  const transition = useTransition(move, {
    from: { transform: `translate3d(${move}, 0, 0)` },
    // leave: { transform: `translate3d(-100%, 0, 0)` },
  })

  return transition((style) => (
    <animated.div id="slider" style={{ ...style }}>
      <div id="home" className="panel home"></div>
      <div id="projects" className="panel projects"></div>
      <div id="about" className="panel about"></div>
    </animated.div>
  ))
}
