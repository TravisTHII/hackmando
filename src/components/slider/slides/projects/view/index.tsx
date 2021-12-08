import React from 'react'

import { useProjectsContext } from '../../../../../context/projects'

import { Grid } from './Grid'
import { List } from './List'

export const View = () => {
  const { view } = useProjectsContext()

  if (view === 'list') return <List />

  return <Grid />
}
