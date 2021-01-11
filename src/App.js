import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Panels } from './components/Panels'
import { NotFound } from './components/NotFound'

import './style/App.css'

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Route path="/:_panel(|home|projects|about)" component={Panels} />
				<Route component={NotFound} />
			</Router>
		</div>
	)
}

export default App