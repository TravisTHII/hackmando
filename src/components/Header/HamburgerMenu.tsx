import React from 'react'
import { FiMenu } from 'react-icons/fi'

import { useGlobalContext } from '../../context/Global'

export const HamburgerMenu = () => {

  const { openMenu } = useGlobalContext()

  return (
    <button
      className="icon hamburger_menu"
      onClick={openMenu}
    >
      <div className="flex_ui">
        <FiMenu />
      </div>
    </button>
  )
}