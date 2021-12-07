import { FaNodeJs, FaReact, FaCss3 } from 'react-icons/fa'
import {
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiPython,
} from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'

interface Props {
  name: string
}

export function Icons({ name }: Props) {
  let icon

  if (name === 'React') icon = <FaReact title={name} />
  if (name === 'Node.js') icon = <FaNodeJs title={name} />
  if (name === 'MongoDB') icon = <SiMongodb title={name} />
  if (name === 'Typescript') icon = <SiTypescript title={name} />
  if (name === 'HTML') icon = <AiFillHtml5 title={name} />
  if (name === 'CSS') icon = <FaCss3 title={name} />
  if (name === 'Javascript') icon = <SiJavascript title={name} />
  if (name === 'PHP') icon = <SiPhp title={name} />
  if (name === 'Python') icon = <SiPython title={name} />

  return <>{icon}</>
}
