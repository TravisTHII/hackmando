import React from 'react'

import { ProjectsProvider } from '../../../../context/projects'

import { ProjectsSlide } from './ProjectsSlide'

export const Projects = () => (
  <ProjectsProvider>
    <ProjectsSlide />
  </ProjectsProvider>
)
