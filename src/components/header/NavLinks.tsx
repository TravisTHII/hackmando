import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../context/global'

import { linkSlugs } from './links'

interface Props {
  link: {
    to: string
    text: string
    slug: string
  }
}

export const NavLinks = ({ link: { to, text, slug } }: Props) => {
  const { updatePanel } = useGlobalContext()

  const setPanel = () => {
    const move = `-${linkSlugs.indexOf(slug) * 100}%`
    updatePanel(slug, move)
  }

  return (
    <li onClick={setPanel}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'link_active' : '')}
      >
        {text}
      </NavLink>
    </li>
  )
}
