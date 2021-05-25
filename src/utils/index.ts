import { Panels, Project } from "../context/Global"

export const generatePanels = (main: string[], projects: Project[]) => {

  const copy = [...main]

  let y: string[] = []

  let h: Panels = {}

  for (const i of projects) y.push(i.panel)

  copy.splice(1, 0, ...y)

  const l = copy.length

  let r = [...Array(l).keys()].reverse()

  for (const [i, v] of copy.entries()) {
    h[v] = { stack: r[i] + 1, state: true }
  }

  return h
}