import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { GlobalProvider } from '../../context/Global'
import { main, projects } from '../../data'

import { Header } from '../Header'
import { Panels } from '../Panels'
import { NotFound } from '../NotFound'

import { unionString } from '../../utils'

import '../../style/App.css'

export const App = () => (
  <GlobalProvider>
    <Router>
      <Header />
      <Switch>
        <Route path={`/(|${unionString(main)})`} component={Panels} />
        <Route
          path={`/projects/(${unionString(projects)})`}
          component={Panels}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </GlobalProvider>
)
