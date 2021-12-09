import { State, Action } from './types'

export const reducer = (state: State, action: Action) => {
  if (action.type === 'CHANGE_VIEW') {
    const { view } = action.payload

    return {
      ...state,
      view,
    }
  }

  if (action.type === 'MOVE') {
    const { page } = action.payload

    return {
      ...state,
      page,
      offset: -(state.move * (page - 1) + (page - 1) * 50),
    }
  }

  if (action.type === 'RESET_CAROUSEL') {
    const { page, offset } = action.payload

    return {
      ...state,
      page,
      offset,
    }
  }

  return state
}
