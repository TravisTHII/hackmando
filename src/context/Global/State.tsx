import React, { createContext, useContext, useReducer } from 'react'

import { reducer } from './reducer'

import { InitialStateType, State } from './types'

import { panels, main, projects } from '../../data'

import { getCurrentPanel } from '../../utils'

const initialState: State = {
  currentPanel: 'home',
  panels,
  projects,
  modelOpen: false
}

export const Context = createContext({} as InitialStateType)

export const useGlobalContext = () => useContext(Context)

export const Provider: React.FC = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const opderPanels = () => {
    dispatch({
      type: 'ORDER_PANELS',
      payload: {
        panel: getCurrentPanel(main, projects)
      }
    })
  }

  const updatePanel = (panel: string) => {
    dispatch({
      type: 'UPDATE_PANEL',
      payload: {
        panel
      }
    })
  }

  const openMenu = () => {
    dispatch({
      type: 'OPEN_MENU',
      payload: {
        modelOpen: !state.modelOpen
      }
    })
  }

  return (
    <Context.Provider value={{
      ...state,
      opderPanels,
      updatePanel,
      openMenu
    }}>
      {children}
    </Context.Provider>
  )
}