import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'

import { useGlobalContext } from '../../context/Global'

import { Card } from '../Card'

export function Comments() {

  const { state: { panels: { comments } } } = useGlobalContext()

  return (
    <div className={`comments panel${comments.state ? '' : ' hide_panel'}`}>
      <div className="container flex_ui">

        <Card inverted={false}>

          <div className="grid_one card_ui flex-column">
            <div className="content_header">
              <h1>React Comments</h1>
              <p>Dynamic commenting application</p>
            </div>
            <div className="card_content text_ui">
              <p className="center_text">
                Simple, Fully featured, comments built with react.
                engage with users, comment on posts and enjoy fun conversations.
              </p>
              <div className="content_list">
                <ul>
                  <li>Multiple threads to organize discussions</li>
                  <li>Post & Reply to comments</li>
                  <li>Pin comments to top of threads</li>
                  <li>Cursor based pagination</li>
                  <li>Order comments by old or new</li>
                  <li>Choose from multiple users</li>
                  <li>Jwt for simple authentication</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex_ui">
                <FaReact className="skill_icon" title="React" />
                <SiMongodb className="skill_icon" title="MongoDB" />
                <FaNodeJs className="skill_icon" title="Node.js" />
              </div>
            </div>
          </div>

          <div className="grid_two">
            <div className="project_image">
              <a
                href="https://react-comments.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../images/comments.png" alt="react comments project" />
              </a>
            </div>
          </div>

        </Card>

      </div>
    </div>
  )
}