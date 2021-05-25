import React, { createContext, useContext, useReducer } from 'react'

import { GlobalReducer } from './Reducer'

import { DispatchName, InitialStateType, State } from './types'

const initialState: State = {
  currentPanel: 'home',
  panels: {
    home: { state: true, stack: 9 },
    comments: { state: true, stack: 8 },
    search: { state: true, stack: 7 },
    queue: { state: true, stack: 6 },
    discover: { state: true, stack: 5 },
    about: { state: true, stack: 4 },
  }
}

export const Context = createContext({} as InitialStateType)

export const useGlobalContext = () => useContext(Context)

export const Provider: React.FC = ({ children }) => {

  const [state, dispatch] = useReducer(GlobalReducer, initialState)

  const opderPanels = () => {

    let panel

    const location = window.location.pathname
    const path = location.match(/home|projects|about/)

    if (path) {

      panel = path[0]

      if (panel === 'projects') {

        const x = location.match(/comments|search|queue|discover/)

        if (x) {

          panel = x[0]

        }

      }

    } else {

      panel = 'home'

    }

    dispatch({
      type: DispatchName.ORDER_PANELS,
      payload: {
        panel
      }
    })
  }

  const updatePanel = (panel: string) => {
    dispatch({
      type: DispatchName.UPDATE_PANEL,
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