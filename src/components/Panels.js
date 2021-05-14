import React, { useContext, useEffect } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Menu } from './Menu'

import { Home, Comments, Queue, Search, Discover, About } from './panels'

export function Panels({ location: { pathname } }) {

  const { state: { currentPanel }, opderPanels } = useContext(GlobalContext)

  useEffect(() => {
    opderPanels()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPanel, pathname])

  return (
    <>
      <Menu />
      <div id="Panels">
        <Home />
        <Comments />
        <Queue />
        <Search />
        <Discover />
        <About />
      </div>
    </>
  )
}