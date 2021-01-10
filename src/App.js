import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'

import './style/App.css'

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Home />
				<Projects />
			</Router>
		</div>
	);
}

export default App;