import React from 'react'
import { Link } from 'react-router-dom'

import { Nav } from './nav'
import { Mobile } from './mobile'
import { SocialLinks } from './SocialLinks'

export const Header = () => (
  <header id="header">
    <div className="header_container">
      <div>
        <div className="logo_container">
          <Link to="/">
            <h1 className="logo">HackManDo</h1>
          </Link>
        </div>
        <SocialLinks />
      </div>
      <Nav />
    </div>
    <Mobile />
  </header>
)
