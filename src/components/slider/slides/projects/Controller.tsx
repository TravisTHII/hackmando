import React from 'react'
import { IconContext } from 'react-icons'
import { FaThLarge, FaList } from 'react-icons/fa'

import { useProjectsContext } from '../../../../context/projects'

export const Controller = () => {
  const { changeView } = useProjectsContext()

  return (
    <div className="projects_controller flex_ui">
      <IconContext.Provider
        value={{ size: '1.625em', className: 'controller_icon' }}
      >
        <ul className="flex_ui">
          <li className="white_border" onClick={() => changeView('grid')}>
            <FaThLarge />
          </li>
          <li className="white_border" onClick={() => changeView('list')}>
            <FaList />
          </li>
        </ul>
      </IconContext.Provider>
    </div>
  )
}
