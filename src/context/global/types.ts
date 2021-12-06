export type InitialStateType = {
  updatePanel: (panel: string) => void
} & State

export type State = {
  currentPanel: string
  move: string
}

export type Action = {
  type: 'UPDATE_PANEL'
  payload: { panel: string; move: string }
}
