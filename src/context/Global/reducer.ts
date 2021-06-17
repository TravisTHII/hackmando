import { Dispatch, State, Action } from './types'
import { stackPanels } from '../../utils'

export const reducer = (state: State, action: Action) => {
  const { type, payload } = action

  if (type === Dispatch.ORDER_PANELS) {
    return {
      ...state,
      currentPanel: payload.panel,
      panels: stackPanels(state.panels, state.currentPanel)
    }
  }

  if (type === Dispatch.UPDATE_PANEL) {
    return {
      ...state,
      currentPanel: payload.panel
    }
  }

  return state
}