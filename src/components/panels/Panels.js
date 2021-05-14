import React, { useEffect } from 'react'

import { useGlobalContext } from '../../context/Global'

import { Menu } from '../Menu'

import { Home } from './Home'
import { Comments } from './Comments'
import { Search } from './Search'
import { Queue } from './Queue'
import { Discover } from './Discover'
import { About } from './About'

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
        <Search />
        <Queue />
        <Discover />
        <About />
      </div>
    </>
  )
}