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

export const stackPanels = (panels: Panels, currentPanel: string) => {
  const copy = { ...panels }

  const s = copy[currentPanel].stack

  for (const i of Object.values(copy))
    i.state = (i.stack === s || i.stack < s) ? true : false

  return copy
}

export const getCurrentPanel = (main: Main[], projects: Project[]) => {
  let panel

  const location = window.location.pathname
  const path = location.match(matchString(main, 'projects'))

  if (path) {

    panel = path[0]

    if (panel === 'projects') {

      const x = location.match(matchString(projects))

      if (x) {

        panel = x[0]

      }

    }

  } else {

    panel = 'home'

  }

  return panel
}