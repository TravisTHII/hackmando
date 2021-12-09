import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from 'react'

import { reducer } from './reducer'

import { InitialStateType, State } from './types'

import { projects } from '../../data'

const initialState: State = {
  view: 'grid',
  projects,
  color: projects[0].color,
  page: 1,
  last: Math.ceil(projects.length / 1),
  move: 1050,
  offset: 0,
}

export const Context = createContext({} as InitialStateType)

export const useProjectsContext = () => useContext(Context)

export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeView = (view: string) =>
    dispatch({
      type: 'CHANGE_VIEW',
      payload: {
        view,
      },
    })

  const traverseCarousel = (page: number) => {
    if (state.page !== page) {
      dispatch({
        type: 'TRAVERSE_CAROUSEL',
        payload: {
          page,
        },
      })
    }
  }

  const resetCarousel = useCallback(
    () =>
      dispatch({
        type: 'RESET_CAROUSEL',
        payload: {
          page: 1,
          offset: 0,
        },
      }),
    []
  )

  const changeColor = (color: string) =>
    dispatch({
      type: 'CHANGE_COLOR',
      payload: {
        color,
      },
    })

  return (
    <Context.Provider
      value={{
        ...state,
        changeView,
        traverseCarousel,
        resetCarousel,
        changeColor,
      }}
    >
      {children}
    </Context.Provider>
  )
}
