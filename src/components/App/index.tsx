import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { GlobalProvider } from '../../context/Global'
import { main, projects } from '../../context/Global/data'

import { Header } from '../Header'
import { Panels } from '../Panels'
import { NotFound } from '../NotFound'

import { matchString } from '../../utils/matchString'

import '../../style/App.css'

export const App = () =>
  <GlobalProvider>
    <Router>
      <Header />
      <Switch>
        <Route path={`/(|${matchString(main)})`} component={Panels} />
        <Route path={`/projects/(${matchString(projects)})`} component={Panels} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </GlobalProvider>