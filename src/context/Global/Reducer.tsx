import { DispatchName, State, Action } from './types'

export const GlobalReducer = (state: State, action: Action) => {
  const { type, payload } = action

  if (type === DispatchName.ORDER_PANELS) {
    const panels = { ...state.panels }

    const s = panels[state.currentPanel].stack

    for (const i of Object.values(panels)) {
      i.state = (i.stack === s || i.stack < s) ? true : false
    }

    return {
      ...state,
      currentPanel: payload.panel,
      panels
    }
  }

  if (type === DispatchName.UPDATE_PANEL) {
    return {
      ...state,
      currentPanel: payload.panel
    }
  }

  return state
}