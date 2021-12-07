import React from 'react'
import { IconContext } from 'react-icons'

import { Icons } from './Icons'

const skills = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'PHP',
  'Python',
  'React',
  'Node.js',
]

export const Skills = () => (
  <IconContext.Provider
    value={{ color: '#fff', size: '2em', className: 'skill_icon' }}
  >
    {skills.map((t, i) => (
      <Icons key={i} name={t} />
    ))}
  </IconContext.Provider>
)
