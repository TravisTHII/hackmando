import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { GlobalProvider } from '../../context/Global'

import { Header } from '../Header'
import { Panels } from '../Panels'
import { NotFound } from '../NotFound'

import '../../style/App.css'

export function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Panels} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </GlobalProvider>
  )
}