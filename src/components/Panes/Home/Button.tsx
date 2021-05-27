import React from 'react'
import { useHistory } from 'react-router'
import { FaChevronDown } from 'react-icons/fa'

import { useGlobalContext } from '../../../context/Global'

export function Button() {

  const { updatePanel } = useGlobalContext()

  const history = useHistory()

  const seeProjects = () => {
    history.push('/projects/comments')

    updatePanel('comments')
  }

  return (
    <div className="show_projects flex_ui">
      <button
        className="projects_btn"
        onClick={seeProjects}
      >
        See projects
            <FaChevronDown />
      </button>
    </div>
  )
}