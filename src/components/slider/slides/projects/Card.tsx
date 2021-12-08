import React from 'react'

import { TechStack } from './TechStack'

interface Props {
  title: string
  subTitle: string
  description: string
  bulletPoints: string[]
  url: string
  reversed: boolean
  image: string
  techStack: string[]
}

export const Card = ({
  title,
  subTitle,
  description,
  bulletPoints,
  url,
  reversed,
  image,
  techStack,
}: Props) => {
  return (
    <div className={`project_card flex_ui${reversed ? ' flex_reserve' : ''}`}>
      <div className="project_info">
        <div>
          <div className="pi_header">
            <h2>{title}</h2>
            <p>{subTitle}</p>
          </div>
          <div className="pi_content">
            <p>{description}</p>
            <ul>
              {bulletPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="pi_tech_stack flex_ui">
          <TechStack techStack={techStack} />
        </ul>
      </div>
      <div className="project_image white_border">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="project_picture">
            <img src={image} alt={title} />
          </div>
        </a>
      </div>
    </div>
  )
}
