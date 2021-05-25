import React from 'react'
import { Link } from 'react-router-dom'

import { FaCode, FaGithub } from 'react-icons/fa'

export function Header() {
  return (
    <header className="header">
      <div className="header_container flex_ui">
        <div className="logo">
          <Link to="/">
            <h1>HackManDo</h1>
          </Link>
        </div>
        <div className="icons_container">
          <a
            className="icon flex_ui"
            href="https://github.com/TravisTHII"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="icon flex_ui"
            href="https://github.com/TravisTHII/hackmando"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode />
          </a>
        </div>
      </div>
    </header>
  )
}