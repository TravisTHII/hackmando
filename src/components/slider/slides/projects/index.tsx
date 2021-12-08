import React from 'react'

import { Card } from './Card'

import { projects } from '../../../../data'

export const Projects = () => {
  const one = projects[1]
  return (
    <div id="projects" className="slide projects">
      <div className="slide_container">
        <div className="projects_container flex_ui">
          <Card {...one} />
        </div>
      </div>
    </div>
  )
}
