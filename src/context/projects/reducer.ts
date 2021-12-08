import { State, Action } from './types'

export const reducer = (state: State, action: Action) => {
  if (action.type === 'CHANGE_VIEW') {
    const { view } = action.payload

    return {
      ...state,
      view,
    }
  }

  return state
}
