import React from 'react'

import { ProjectsProvider } from '../../../../context/projects'

import { Slide } from './Slide'

export const Projects = () => (
  <ProjectsProvider>
    <Slide />
  </ProjectsProvider>
)
