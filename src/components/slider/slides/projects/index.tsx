import React from 'react'

import { Controller } from './Controller'
import { Card } from './Card'

import { projects } from '../../../../data'

export const Projects = () => {
  const one = projects[1]
  return (
    <div id="projects" className="slide projects">
      <div className="slide_container">
        <div className="projects_container flex_ui">
          <div className="projects_content flex_ui">
            <Controller />
            <Card {...one} />
          </div>
        </div>
      </div>
    </div>
  )
}
