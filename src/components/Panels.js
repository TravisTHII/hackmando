import React, { useContext, useEffect } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Menu } from './menu/Menu'
import { Home } from './Home'
import { Comments } from './Comments'
import { Queue } from './Queue'
import { Search } from './Search'
import { Discover } from './Discover'
import { About } from './About'

import { MobileMenu } from './includes/MobileMenu'

export function Panels() {

	const { state: { currentPanel, menuIsOpen }, opderPanels } = useContext(GlobalContext)

	useEffect(() => {
		opderPanels()
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
			{menuIsOpen && <MobileMenu />}
		</>
	)
}