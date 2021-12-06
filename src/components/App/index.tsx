import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { GlobalProvider } from '../../context/Global'

import { Header } from '../Header'
import { Panels } from '../Panels'
import { NotFound } from '../NotFound'

import '../../style/App.css'

export const App = () => (
  <GlobalProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Panels />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </GlobalProvider>
)
