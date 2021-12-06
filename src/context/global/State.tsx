import React, { createContext, useContext, useReducer } from 'react'

import { reducer } from './reducer'

import { InitialStateType, State } from './types'

const initialState: State = {
  currentPanel: 'home',
}

export const Context = createContext({} as InitialStateType)

export const useGlobalContext = () => useContext(Context)

export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updatePanel = (panel: string) => {
    dispatch({
      type: 'UPDATE_PANEL',
      payload: {
        panel,
      },
    })
  }

  return (
    <Context.Provider
      value={{
        ...state,
        updatePanel,
      }}
    >
      {children}
    </Context.Provider>
  )
}
