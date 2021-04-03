import React, { useContext, useEffect } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Menu } from './menu/Menu'

import { Home } from './panels/Home'
import { Comments } from './panels/Comments'
import { Queue } from './panels/Queue'
import { Search } from './panels/Search'
import { Discover } from './panels/Discover'
import { About } from './panels/About'

export function Panels() {

	const { state: { currentPanel }, opderPanels } = useContext(GlobalContext)

	useEffect(() => {
		opderPanels()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPanel, window.location.pathname])

	return (
		<>
			<Menu />
			<div id="Panels">
				<Home />
				<Comments />
				<Queue />
				<Search />
				<Discover />
				<About />
			</div>
		</>
	)
}