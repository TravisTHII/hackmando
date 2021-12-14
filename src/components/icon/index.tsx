import {
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiPython,
  SiHtml5,
  SiNodedotjs,
  SiReact,
  SiCss3,
} from 'react-icons/si'

interface Props {
  name: string
}

export function Icon({ name }: Props) {
  let icon

  if (name === 'react') icon = <SiReact title={name} />
  if (name === 'nodejs') icon = <SiNodedotjs title={name} />
  if (name === 'mongodb') icon = <SiMongodb title={name} />
  if (name === 'typescript') icon = <SiTypescript title={name} />
  if (name === 'html') icon = <SiHtml5 title={name} />
  if (name === 'css') icon = <SiCss3 title={name} />
  if (name === 'javascript') icon = <SiJavascript title={name} />
  if (name === 'php') icon = <SiPhp title={name} />
  if (name === 'python') icon = <SiPython title={name} />

  return <>{icon}</>
}
