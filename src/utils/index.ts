import { Panels, Project } from "../context/Global"

export const generatePanels = (main: string[], projects: Project[]) => {

  const copy = [...main]

  const a: string[] = []

  for (const i of projects)
    a.push(i.panel)

  copy.splice(1, 0, ...a)

  const length = copy.length

  const range = [...Array(length).keys()].reverse()

  const o: Panels = {}

  for (const [i, v] of copy.entries())
    o[v] = { stack: range[i] + 1, state: true }

  return o
}