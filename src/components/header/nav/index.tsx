import React from 'react'
import { NavLinks } from './NavLinks'

import { links } from './links'

export const Nav = () => (
  <nav>
    <ul>
      {links.map((link, i) => (
        <NavLinks key={i} link={link} />
      ))}
    </ul>
  </nav>
)
