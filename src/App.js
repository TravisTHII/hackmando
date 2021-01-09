import React from 'react'

import { Home } from './components/Home'
import { Projects } from './components/Projects'

import './style/App.css'

function App() {
	return (
		<div className="App">
			<Home />
			<Projects />
		</div>
	);
}

export default App;