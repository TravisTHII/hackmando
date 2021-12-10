import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'

import { Nav } from '../nav'
import { SocialLinks } from '../SocialLinks'

interface Props {
  hidden: boolean
  setHidden: (hidden: boolean) => void
}

export const Menu = ({ hidden, setHidden }: Props) => {
  const [styles, api] = useSpring(() => ({
    transform: 'translate3d(-100%, 0, 0)',
  }))

  // Update spring with new props
  api.start({
    transform: !hidden ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)',
  })

  return ReactDOM.createPortal(
    <animated.div
      id="mobile_menu"
      onClick={() => setHidden(!hidden)}
      style={styles}
    >
      <div className="mm_container flex_ui">
        <Nav />
        <SocialLinks />
      </div>
    </animated.div>,
    document.body
  )
}
