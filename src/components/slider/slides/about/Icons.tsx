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

export function Icons({ name }: Props) {
  let icon

  if (name === 'React') icon = <SiReact title={name} />
  if (name === 'Node.js') icon = <SiNodedotjs title={name} />
  if (name === 'MongoDB') icon = <SiMongodb title={name} />
  if (name === 'Typescript') icon = <SiTypescript title={name} />
  if (name === 'HTML') icon = <SiHtml5 title={name} />
  if (name === 'CSS') icon = <SiCss3 title={name} />
  if (name === 'Javascript') icon = <SiJavascript title={name} />
  if (name === 'PHP') icon = <SiPhp title={name} />
  if (name === 'Python') icon = <SiPython title={name} />

  return <>{icon}</>
}
