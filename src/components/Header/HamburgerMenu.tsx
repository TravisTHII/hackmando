import React from 'react'
import { FiMenu } from 'react-icons/fi'

import { useGlobalContext } from '../../context/Global'

export const HamburgerMenu = () => {

  const { openMenu } = useGlobalContext()

  return (
    <div className="hamburger_menu">
      <button
        className="menu_button flex_ui"
        onClick={() => openMenu()}
      >
        <FiMenu />
      </button>
    </div>
  )
}