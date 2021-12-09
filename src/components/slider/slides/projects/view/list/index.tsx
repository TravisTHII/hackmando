import React from 'react'

import { useProjectsContext } from '../../../../../../context/projects'

import { ListItem } from './ListItem'

export const List = () => {
  const { projects } = useProjectsContext()

  return (
    <ul className="projects_list">
      {projects.map((project, i) => (
        <ListItem key={i} {...project} />
      ))}
    </ul>
  )
}
