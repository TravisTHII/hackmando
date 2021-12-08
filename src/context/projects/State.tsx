import React, { createContext, useContext, useReducer } from 'react'

import { reducer } from './reducer'

import { InitialStateType, State } from './types'

import { projects } from '../../data'

const initialState: State = {
  view: 'grid',
  projects,
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

  return (
    <Context.Provider
      value={{
        ...state,
        changeView,
      }}
    >
      {children}
    </Context.Provider>
  )
}
