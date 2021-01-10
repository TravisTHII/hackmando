import React, { useContext, useEffect } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Home } from './Home'
import { Projects } from './Projects'
import { About } from './About'

export function Panels() {

	const { state: { currentPanel }, opderPanels } = useContext(GlobalContext)

	useEffect(() => {
		opderPanels()
	}, [currentPanel, window.location.pathname])

	return (
		<>
			<Home />
			<Projects />
			<About />
		</>
	)
}