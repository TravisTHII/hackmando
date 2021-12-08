import React from 'react'
import { IconContext } from 'react-icons'
import { FaThLarge, FaList } from 'react-icons/fa'

export const Controller = () => {
  return (
    <div className="projects_controller flex_ui">
      <IconContext.Provider
        value={{ size: '1.875em', className: 'controller_icon' }}
      >
        <ul className="flex_ui">
          <li className="white_border">
            <FaThLarge />
          </li>
          <li className="white_border">
            <FaList />
          </li>
        </ul>
      </IconContext.Provider>
    </div>
  )
}
