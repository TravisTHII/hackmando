import React, { useEffect } from 'react'

import { useGlobalContext } from '../../context/Global'

import { Menu } from '../Menu'
import { Home, Project, About, Pane } from '../Panes'

import { Props } from './types'

export function Panels({ location: { pathname } }: Props) {

  const { panels, projects, currentPanel, orderPanels } = useGlobalContext()

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