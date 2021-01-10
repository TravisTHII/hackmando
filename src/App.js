import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Menu } from './components/Menu'

import { Panels } from './components/Panels'

import './style/App.css'

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Menu />
				<Route path="/:_panel(|home|projects|about)" component={Panels} />
			</Router>
		</div>
	);
}

export default App;