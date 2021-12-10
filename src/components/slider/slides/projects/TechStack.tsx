import React from 'react'
import { IconContext } from 'react-icons'

import { Icon } from '../../../Icon'

interface Props {
  techStack: string[]
  size: string
}

export const TechStack = ({ techStack, size }: Props) => (
  <IconContext.Provider value={{ color: '#fff', size, className: 'tech_icon' }}>
    {techStack.map((icon, i) => (
      <li key={i}>
        <Icon name={icon} />
      </li>
    ))}
  </IconContext.Provider>
)
