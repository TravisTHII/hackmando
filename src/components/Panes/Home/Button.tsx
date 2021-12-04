import React from 'react'
import { useHistory } from 'react-router'
import { FaChevronDown } from 'react-icons/fa'

import { useGlobalContext } from '../../../context/Global'

export function Button() {
  const { updatePanel, projects } = useGlobalContext()

  const history = useHistory()

  const seeProjects = () => {
    const firstProject = projects[0]

    history.push(firstProject.clientLink.url)

    updatePanel(firstProject.clientLink.slug)
  }

  return (
    <div className="show_projects flex_ui">
      <button className="projects_btn" onClick={seeProjects}>
        see projects
        <FaChevronDown />
      </button>
    </div>
  )
}
