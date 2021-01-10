import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalProvider } from './context/GlobalState'

import App from './App'

import './style/index.css'

ReactDOM.render(
	<GlobalProvider>
		<App />
	</GlobalProvider>,
	document.getElementById('root')
)