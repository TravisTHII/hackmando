import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GlobalProvider } from '../../context/global'

import { Header, Slider, NotFound } from '../'

export const App = () => (
  <GlobalProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Slider />}></Route>
          <Route path="projects" element={<Slider />}></Route>
          <Route path="contact" element={<Slider />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </GlobalProvider>
)
