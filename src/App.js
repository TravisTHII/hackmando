import React from 'react'

import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'

import './style/App.css'

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<Projects />
		</div>
	);
}

export default App;