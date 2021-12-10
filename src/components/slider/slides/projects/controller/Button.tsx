import React from 'react'

import { useProjectsContext } from '../../../../../context/projects'

interface Props {
  viewName: string
}

export const Button: React.FC<Props> = ({ children, viewName }) => {
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
