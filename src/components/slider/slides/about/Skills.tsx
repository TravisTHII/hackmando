import React from 'react'
import { IconContext } from 'react-icons'

import { Icon } from '../../../icon'

const skills = [
  'html',
  'css',
  'javascript',
  'typescript',
  'php',
  'python',
  'react',
  'nodejs',
]

export const Skills = () => (
  <IconContext.Provider
    value={{ color: '#fff', size: '2em', className: 'skill_icon' }}
  >
    {skills.map((t, i) => (
      <li key={i}>
        <Icon name={t} />
      </li>
    ))}
  </IconContext.Provider>
)
