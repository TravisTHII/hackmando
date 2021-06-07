import { Main, Panels, Project } from '../types'

export const generatePanels = (main: Main[], projects: Project[]) => {

  const copy = [...main]

  copy.splice(1, 0, ...projects)

  const length = copy.length

  const range = [...Array(length).keys()].reverse()

  const panels: Panels = {}

  for (const [i, v] of copy.entries())
    panels[v.panel] = {
      stack: range[i] + 1,
      state: true,
      color: v.color
    }

  return panels
}

export const matchString = (array: { panel: string }[], d = '') => {
  const a: string[] = []

  if (d) a.push(d)

  for (const i of array) a.push(i.panel)

  return a.join('|')
}