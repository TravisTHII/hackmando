import React, { useEffect } from 'react'

import { useGlobalContext } from '../../context/Global'

import { Menu } from '../Menu'

import { Home, Project, About } from '.'

import { projects } from '../../projects'

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
        {projects.map((project, i) => (
          <Project
            key={i}
            {...project}
          />
        ))}
        <About />
      </div>
    </>
  )
}