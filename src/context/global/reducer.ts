import { State, Action } from './types'

export const reducer = (state: State, action: Action) => {
  if (action.type === 'UPDATE_PANEL') {
    return {
      ...state,
      currentPanel: action.payload.panel,
    }
  }

  return state
}
