import React from 'react'
import { IconContext } from 'react-icons'
import { FaThLarge, FaList } from 'react-icons/fa'

import { Button } from './Button'

export const Controller = () => (
  <div className="projects_controller">
    <ul className="flex_ui">
      <IconContext.Provider
        value={{ size: '1.5em', className: 'controller_icon' }}
      >
        <Button viewName="grid">
          <FaThLarge />
        </Button>
        <Button viewName="list">
          <FaList />
        </Button>
      </IconContext.Provider>
    </ul>
  </div>
)
