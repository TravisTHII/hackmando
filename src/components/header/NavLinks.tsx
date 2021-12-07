import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../context/global'

import { calcMove } from '../../utils'

interface Props {
  link: {
    to: string
    text: string
    slug: string
  }
}

export const NavLinks = ({ link: { to, text, slug } }: Props) => {
  const { updatePanel } = useGlobalContext()

  return (
    <li onClick={() => updatePanel(slug, calcMove(slug))}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'link_active' : '')}
      >
        {text}
      </NavLink>
    </li>
  )
}
