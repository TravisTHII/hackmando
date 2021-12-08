import React from 'react'

import { useProjectsContext } from '../../../../../context/projects'

import { Card } from './Card'

export const Grid = () => {
  const { projects } = useProjectsContext()

  return <Card {...projects[1]} />
}
