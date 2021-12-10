import { State, Action } from './types'

export const reducer = (state: State, action: Action) => {
  if (action.type === 'UPDATE_PANEL') {
    const { panel, move } = action.payload

    return {
      ...state,
      currentPanel: panel,
      move,
    }
  }

  return state
}
