import React from 'react'

import { useGlobalContext } from '../../context/Global'

import { Menu } from '.'

export function MenuModal() {

  const { openMenu } = useGlobalContext()

  return (
    <div
      className="menu_modal"
      onClick={openMenu}
    >
      <div className="menu_modal_container">
        <Menu isMobileMenu={true} />
      </div>
    </div>
  )
}