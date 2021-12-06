import React from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { FiCode, FiGithub } from 'react-icons/fi'
import { NavItems } from './NavItems'

const navItems = [
  { to: '/', text: 'Home' },
  { to: '/projects', text: 'Projects' },
  { to: '/about', text: 'About' },
]

export const Header = () => {
  return (
    <div id="header">
      <div className="header_container">
        <div>
          <div>
            <Link to="/">
              <h1 className="logo">HackManDo</h1>
            </Link>
          </div>
          <div className="header_icons_container">
            <IconContext.Provider
              value={{ color: '#fff', size: '2rem', className: 'stroke_small' }}
            >
              <a
                className="header_icon flex_ui"
                href="https://github.com/TravisTHII/hackmando"
                target="_blank"
                rel="noopener noreferrer"
                title="See project code"
              >
                <FiCode />
              </a>
              <a
                className="header_icon flex_ui"
                href="https://github.com/TravisTHII"
                target="_blank"
                rel="noopener noreferrer"
                title="My GitHub"
              >
                <FiGithub />
              </a>
            </IconContext.Provider>
          </div>
        </div>

        <nav>
          <ul>
            {navItems.map(({ to, text }, i) => (
              <NavItems key={i} to={to} text={text} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
