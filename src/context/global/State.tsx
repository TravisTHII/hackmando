import React, { createContext, useContext, useReducer } from 'react'

import { reducer } from './reducer'

import { InitialStateType, State } from './types'

const initialState: State = {
  currentPanel: 'home',
  move: '0%',
}

export const Context = createContext({} as InitialStateType)

export const useGlobalContext = () => useContext(Context)

export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updatePanel = (panel: string) => {
    const p = ['home', 'projects', 'about']
    const move = `-${p.indexOf(panel) * 100}%`

    dispatch({
      type: 'UPDATE_PANEL',
      payload: {
        panel,
        move,
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
