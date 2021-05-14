import React, { useEffect } from 'react'

import { useGlobalContext } from '../../context/Global'

import { Menu } from '../Menu'

import { Home, Comments, Queue, Search, Discover, About } from './'

export function Panels({ location: { pathname } }) {

  const { state: { currentPanel }, opderPanels } = useGlobalContext()

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