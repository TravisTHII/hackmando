import { GLOBAL } from './actions'

export const GlobalReducer = (state, action) => {
	const { type, payload } = action

	if (type === GLOBAL.ORDER_PANELS) {
		const panels = { ...state.panels }

		const s = panels[state.currentPanel].stack

		for (const i of Object.values(panels)) {
			i.state = (i.stack === s || i.stack < s) ? true : false
		}

		return {
			...state,
			currentPanel: payload.panel,
			panels
		}
	}

	if (type === GLOBAL.UPDATE_PANEL) {
		return {
			...state,
			currentPanel: payload.panel
		}
	}

	return state
}