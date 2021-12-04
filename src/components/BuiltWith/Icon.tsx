import { FaNodeJs, FaReact, FaCss3 } from 'react-icons/fa'
import {
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiPython,
} from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'

import { IconProps } from './types'

export function Icon({ name }: IconProps) {
  let icon

  if (name === 'React') icon = <FaReact className="tech_icon" title={name} />
  if (name === 'Node.js') icon = <FaNodeJs className="tech_icon" title={name} />
  if (name === 'MongoDB')
    icon = <SiMongodb className="tech_icon" title={name} />
  if (name === 'Typescript')
    icon = <SiTypescript className="tech_icon" title={name} />
  if (name === 'HTML') icon = <AiFillHtml5 className="tech_icon" title={name} />
  if (name === 'CSS') icon = <FaCss3 className="tech_icon" title={name} />
  if (name === 'Javascript')
    icon = <SiJavascript className="tech_icon" title={name} />
  if (name === 'PHP') icon = <SiPhp className="tech_icon" title={name} />
  if (name === 'Python') icon = <SiPython className="tech_icon" title={name} />

  return <>{icon}</>
}
