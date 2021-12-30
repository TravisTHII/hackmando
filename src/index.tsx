import React from 'react'
import { render } from 'react-dom'

import { App } from './components/app'

import './styles/index.css'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  , document.getElementById('root'))
