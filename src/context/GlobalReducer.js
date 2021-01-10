import { GLOBAL } from './actions'

export default (state, action) => {
	const { type, payload } = action

	if (type === GLOBAL.ORDER_PANELS) {
		console.log(state.currentPanel)

		const panels = { ...state.panels }

		for (const i of Object.keys(panels)) {
			panels[state.currentPanel] = true
			panels[i] = false
		}

		return {
			...state,
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