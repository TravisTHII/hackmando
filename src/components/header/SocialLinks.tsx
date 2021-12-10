import React from 'react'
import { IconContext } from 'react-icons'
import { FiCode, FiGithub } from 'react-icons/fi'

export const SocialLinks = () => (
  <div className="social_icons_container">
    <IconContext.Provider
      value={{
        color: '#fff',
        size: '2rem',
        className: 'social_icon',
      }}
    >
      <a
        className="social_link flex_ui"
        href="https://github.com/TravisTHII/hackmando"
        target="_blank"
        rel="noopener noreferrer"
        title="Project Code"
      >
        <FiCode />
      </a>
      <a
        className="social_link flex_ui"
        href="https://github.com/TravisTHII"
        target="_blank"
        rel="noopener noreferrer"
        title="My GitHub"
      >
        <FiGithub />
      </a>
    </IconContext.Provider>
  </div>
)
