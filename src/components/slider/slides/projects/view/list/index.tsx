import React from 'react'

import { useProjectsContext } from '../../../../../../context/projects'

import { ListItem } from './ListItem'

export const List = () => {
  const { projects } = useProjectsContext()

  return (
    <div className="projects_list_container flex_ui">
      <ul className="projects_list">
        {projects.map((project, i) => (
          <ListItem key={i} {...project} />
        ))}
      </ul>
    </div>
  )
}
