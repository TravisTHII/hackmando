import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useGlobalContext } from '../../context/Global'

import { Menu } from '../Menu'
import { Home, Project, About, Pane } from '../Panes'

export function Panels() {
  const { panels, projects, currentPanel, orderPanels } = useGlobalContext()

  const { pathname } = useLocation()

  useEffect(() => {
    orderPanels()
  }, [currentPanel, pathname, orderPanels])

  return (
    <>
      <Menu isMobileMenu={false} />
      <div id="Panels">
        <Pane panel={panels['home']}>
          <Home />
        </Pane>
        {projects.map((project, i) => (
          <Pane key={i} panel={panels[project.panel]}>
            <Project {...project} />
          </Pane>
        ))}
        <Pane panel={panels['about']}>
          <About />
        </Pane>
      </div>
    </>
  )
}
