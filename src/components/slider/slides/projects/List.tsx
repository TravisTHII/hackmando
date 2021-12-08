import React from 'react'

import { useProjectsContext } from '../../../../context/projects'

export const List = () => {
  const { projects } = useProjectsContext()

  return (
    <ul>
      {projects.map((project, i) => (
        <li key={i}>{project.title}</li>
      ))}
    </ul>
  )
}
