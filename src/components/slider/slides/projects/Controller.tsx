import React from 'react'
import { IconContext } from 'react-icons'
import { FaThLarge, FaList } from 'react-icons/fa'

import { useProjectsContext } from '../../../../context/projects'

interface Props {
  viewName: string
}

const ViewButton: React.FC<Props> = ({ children, viewName }) => {
  const { view, changeView } = useProjectsContext()

  return (
    <li>
      <button
        className={`controller_btn ${
          view === `${viewName}` ? ' view_active' : ''
        }`}
        onClick={() => changeView(viewName)}
      >
        {children}
      </button>
    </li>
  )
}

export const Controller = () => (
  <div className="projects_controller">
    <ul className="flex_ui">
      <IconContext.Provider
        value={{ size: '1.5em', className: 'controller_icon' }}
      >
        <ViewButton viewName="grid">
          <FaThLarge />
        </ViewButton>
        <ViewButton viewName="list">
          <FaList />
        </ViewButton>
      </IconContext.Provider>
    </ul>
  </div>
)
