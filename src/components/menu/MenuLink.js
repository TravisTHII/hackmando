import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../../context/GlobalState'

export function MenuLink({ name, slug, url, active }) {

  const { state: { currentPanel }, updatePanel } = useContext(GlobalContext)

  const newPanel = (e) => {
    const r = new RegExp(`${url}`)

    if (r.test(window.location.pathname))
      e.preventDefault()

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