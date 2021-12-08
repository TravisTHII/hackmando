import React from 'react'

import { ProjectsProvider } from '../../../../context/projects'

import { Controller } from './Controller'
import { View } from './view'

export const Projects = () => {
  return (
    <ProjectsProvider>
      <div id="projects" className="slide projects">
        <div className="slide_container">
          <div className="projects_container flex_ui">
            <div className="projects_content flex_ui">
              <Controller />
              <View />
            </div>
          </div>
        </div>
      </div>
    </ProjectsProvider>
  )
}
