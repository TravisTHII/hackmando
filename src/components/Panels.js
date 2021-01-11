import React, { useContext, useEffect } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Menu } from './Menu'
import { Home } from './Home'
import { Projects } from './Projects'
import { Queue } from './Queue'
import { Search } from './Search'
import { Discover } from './Discover'
import { About } from './About'

export function Panels() {

	const { state: { currentPanel }, opderPanels } = useContext(GlobalContext)

	useEffect(() => {
		opderPanels()
	}, [currentPanel, window.location.pathname])

	return (
		<>
			<Menu />
			<Home />
			<Projects />
			<Queue />
			<Search />
			<Discover />
			<About />
		</>
	)
}