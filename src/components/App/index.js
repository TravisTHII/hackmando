import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { GlobalProvider } from '../../context/Global'

import { Header } from '../Header'
import { Panels } from '../../components/Panels'
import { NotFound } from '../NotFound'

import '../../style/App.css'

export function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/:_panel(|home|about)" component={Panels} />
            <Route path="/:_panel(projects)/(comments|search|queue|discover)" component={Panels} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  )
}