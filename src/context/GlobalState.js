import React, { createContext, useReducer } from 'react'

import GlobalReducer from './GlobalReducer'

import { GLOBAL } from './actions'

const initialState = {
	currentPanel: 'home',
	panels: {
		home: true,
		projects: true,
		about: true
	}
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {

	const [state, dispatch] = useReducer(GlobalReducer, initialState)

	const opderPanels = () => {
		dispatch({
			type: GLOBAL.ORDER_PANELS
		})
	}

	const updatePanel = (panel) => {
		dispatch({
			type: GLOBAL.UPDATE_PANEL,
			payload: {
				panel
			}
		})
	}

	return (
		<GlobalContext.Provider value={{
			state,
			opderPanels,
			updatePanel
		}}>
			{children}
		</GlobalContext.Provider>
	)
}