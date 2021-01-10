import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalContext } from './context/GlobalState'

import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { About } from './components/About'

import './style/App.css'

function App() {

	const { state: { currentPanel }, opderPanels } = useContext(GlobalContext)

	useEffect(() => {
		opderPanels()
	}, [currentPanel])

	return (
		<div className="App">
			<Router>
				<Header />
				<Menu />
				<Home />
				<Projects />
				<About />
			</Router>
		</div>
	);
}

export default App;