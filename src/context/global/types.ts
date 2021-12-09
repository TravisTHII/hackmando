export type State = {
  currentPanel: string
  move: number
}

export type Action = {
  type: 'UPDATE_PANEL'
  payload: { panel: string; move: number }
}

export type InitialStateType = {
  updatePanel: (panel: string, move: number) => void
} & State
