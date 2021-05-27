export const matchString = (array: { panel: string }[], d = '') => {
  const a: string[] = []

  if (d) a.push(d)

  for (const i of array) a.push(i.panel)

  return a.join('|')
}