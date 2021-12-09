import React from 'react'

import { TechStack } from '../TechStack'

import { Project } from '../types'

export const ListItem = ({
  title,
  subTitle,
  url,
  icon,
  techStack,
  year,
}: Project) => (
  <li className="projects_list_item white_border">
    <a href={url} className="flex_ui" target="_blank" rel="noopener noreferrer">
      <div className="pl_icon">
        <img src={icon} alt={title} />
      </div>
    </a>
    <div className="pl_info">
      <div className="pli_header">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{year}</p>
      </div>
      <div className="pli_sub_header">
        <p>{subTitle}</p>
      </div>
      <ul className="pli_tech_stack">
        <TechStack techStack={techStack} size="1.5em" />
      </ul>
    </div>
  </li>
)
