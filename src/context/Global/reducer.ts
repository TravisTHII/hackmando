import { State, Action } from './types'
import { stackPanels } from '../../utils'

export const reducer = (state: State, action: Action) => {
  if (action.type === 'ORDER_PANELS') {
    return {
      ...state,
      currentPanel: action.payload.panel,
      panels: stackPanels(state.panels, state.currentPanel),
    }
  }

  if (action.type === 'UPDATE_PANEL') {
    return {
      ...state,
      currentPanel: action.payload.panel,
    }
  }

  if (action.type === 'OPEN_MENU') {
    return {
      ...state,
      modalOpen: action.payload.modalOpen,
    }
  }

  return state
}
