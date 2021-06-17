import React, { createContext, useContext, useReducer } from 'react'

import { reducer } from './reducer'

import { Dispatch, InitialStateType, State } from './types'

import { panels, main, projects } from '../../data'

import { getCurrentPanel } from '../../utils'

const initialState: State = {
  currentPanel: 'home',
  panels,
  projects
}

export const Context = createContext({} as InitialStateType)

export const useGlobalContext = () => useContext(Context)

export const Provider: React.FC = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const opderPanels = () => {
    dispatch({
      type: Dispatch.ORDER_PANELS,
      payload: {
        panel: getCurrentPanel(main, projects)
      }
    })
  }

  const updatePanel = (panel: string) => {
    dispatch({
      type: Dispatch.UPDATE_PANEL,
      payload: {
        panel
      }
    })
  }

  return (
    <Context.Provider value={{
      ...state,
      opderPanels,
      updatePanel
    }}>
      {children}
    </Context.Provider>
  )
}