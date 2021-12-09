import React from 'react'

import { TechStack } from '../../TechStack'

import { Project } from '../../../../../../types'

export const Card = ({
  title,
  subTitle,
  description,
  bulletPoints,
  url,
  reversed,
  image,
  techStack,
}: Project) => (
  <div className={`project_card${reversed ? ' flex_reserve' : ''}`}>
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
        <TechStack techStack={techStack} size="3.125em" />
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
