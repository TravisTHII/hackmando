import { Dispatch, State, Action } from './types'
import { stackPanels } from '../../utils'

export const reducer = (state: State, action: Action) => {

  if (action.type === Dispatch.ORDER_PANELS) {
    return {
      ...state,
      currentPanel: action.payload.panel,
      panels: stackPanels(state.panels, state.currentPanel)
    }
  }

  if (action.type === Dispatch.UPDATE_PANEL) {
    return {
      ...state,
      currentPanel: action.payload.panel
    }
  }

  if (action.type === Dispatch.OPEN_MENU) {
    return {
      ...state,
      modelOpen: action.payload.modelOpen
    }
  }

  return state
}