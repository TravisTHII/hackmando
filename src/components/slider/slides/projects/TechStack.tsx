import React from 'react'
import { IconContext } from 'react-icons'

import { Icon } from '../../../Icon'

interface Props {
  techStack: string[]
}

export const TechStack = ({ techStack }: Props) => (
  <IconContext.Provider
    value={{ color: '#fff', size: '3.125em', className: 'tech_icon' }}
  >
    {techStack.map((icon, i) => (
      <li key={i}>
        <Icon name={icon} />
      </li>
    ))}
  </IconContext.Provider>
)
