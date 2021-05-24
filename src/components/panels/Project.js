import React from 'react'

import { useGlobalContext } from '../../context/Global'

import { BuiltWith } from '../BuiltWith'

export function Project({
  panel,
  title,
  subTitle,
  description,
  bulletPoints,
  projectUrl,
  reversed,
  image,
  builtWith
}) {

  const { state: { panels } } = useGlobalContext()

  return (
    <div className={`${panel} panel${panels[panel].state ? '' : ' hide_panel'}`}>
      <div className="container flex_ui">

        <div className={`card ${reversed ? 'grid_reverse' : 'grid_normal'}`}>

          <div className="grid_one card_ui flex-column">
            <div className="content_header">
              <h1>{title}</h1>
              <p>{subTitle}</p>
            </div>
            <div className="card_content text_ui">
              <p className="center_text">{description}</p>
              <div className="content_list">
                <ul>
                  {bulletPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="flex_ui">
                <BuiltWith builtWith={builtWith} />
              </div>
            </div>
          </div>

          <div className="grid_two">
            <div className="project_image">
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={`../images/${image}.png`} alt={`react ${panel} project`} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}