import { FaNodeJs, FaReact, FaCss3 } from 'react-icons/fa'
import { SiMongodb, SiTypescript } from 'react-icons/si'
import { SiGraphql, SiJavascript, SiPhp, SiRedux } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'

export function Icon({ name }) {

  let icon

  switch (name) {
    case 'React':
      icon =
        <FaReact className="tech_icon" title={name} />
      break
    case 'Node.js':
      icon =
        <FaNodeJs className="tech_icon" title={name} />
      break
    case 'MongoDB':
      icon =
        <SiMongodb className="tech_icon" title={name} />
      break
    case 'Typescript':
      icon =
        <SiTypescript className="tech_icon" title={name} />
      break
    case 'HTML':
      icon =
        <AiFillHtml5 className="tech_icon" title={name} />
      break
    case 'CSS':
      icon =
        <FaCss3 className="tech_icon" title={name} />
      break
    case 'Javascript':
      icon =
        <SiJavascript className="tech_icon" title={name} />
      break
    case 'PHP':
      icon =
        <SiPhp className="tech_icon" title={name} />
      break
    case 'Redux':
      icon =
        <SiRedux className="tech_icon" title={name} />
      break
    case 'GraphQL':
      icon =
        <SiGraphql className="tech_icon" title={name} />
      break
    default: break
  }

  return (
    <>
      {icon}
    </>
  )
}