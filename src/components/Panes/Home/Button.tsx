import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'

import { useGlobalContext } from '../../../context/Global'

export function Button() {
  const { updatePanel, projects } = useGlobalContext()

  const navigate = useNavigate()

  const seeProjects = () => {
    const firstProject = projects[0]

    navigate(firstProject.clientLink.url)

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
