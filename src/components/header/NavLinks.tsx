import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../context/global'

interface Props {
  to: string
  text: string
}

export const NavLinks = ({ to, text }: Props) => {
  const { updatePanel } = useGlobalContext()

  return (
    <li onClick={() => updatePanel(text.toLowerCase())}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'link_active' : '')}
      >
        {text}
      </NavLink>
    </li>
  )
}
