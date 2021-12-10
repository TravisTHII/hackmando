import React from 'react'

import { useProjectsContext } from '../../../../../context/projects'

import { Grid } from './grid'
import { List } from './list'

export const View = () => {
  const { view } = useProjectsContext()

  if (view === 'list') return <List />

  return <Grid />
}
