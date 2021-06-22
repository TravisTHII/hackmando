import React, { useEffect } from 'react'

import { useGlobalContext } from '../../context/Global'

import { Menu } from '../Menu'
import { Home, Project, About, Pane } from '../Panes'

import { Props } from './types'

export function Panels({ location: { pathname } }: Props) {

  const { panels, projects, currentPanel, modelOpen, opderPanels } = useGlobalContext()

  useEffect(() => {
    opderPanels()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPanel, pathname])

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
      <div className={`menu_model ${modelOpen ? 'menu_open' : ''}`}>
        <div className="menu_model_container flex_ui">
          <Menu isMobileMenu={true} />
        </div>
      </div>
    </>
  )
}