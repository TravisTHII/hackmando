import React from 'react'
import { Link } from 'react-router-dom'

import { useGlobalContext } from '../../context/Global'

import { Props } from './types'

export function MenuLink({ name, slug, url, active }: Props) {

  const { currentPanel, updatePanel } = useGlobalContext()

  const newPanel = (e: React.MouseEvent) => {
    const r = new RegExp(`${url}`)

    if (r.test(window.location.pathname)) e.preventDefault()

    updatePanel(slug)
  }

  return (
    <Link
      to={url}
      className={`menu_link${(currentPanel === slug || active) ? ' menu_active' : ''}`}
      onClick={newPanel}
    >
      {name}
    </Link>
  )
}