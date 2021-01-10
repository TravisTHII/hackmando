import React, { createContext, useReducer } from 'react'

import GlobalReducer from './GlobalReducer'

import { GLOBAL } from './actions'

const initialState = {
	currentPanel: 'home',
	panels: {
		home: { state: true, stack: 9 },
		projects: { state: true, stack: 8 },
		about: { state: true, stack: 7 },
	}
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {

	const [state, dispatch] = useReducer(GlobalReducer, initialState)

	const opderPanels = () => {

		let panel

		const location = window.location.pathname
		const path = location.match(/home|projects|about/)

		if (path) {
			panel = path[0]
		} else {
			panel = 'home'
		}

		dispatch({
			type: GLOBAL.ORDER_PANELS,
			payload: {
				panel
			}
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