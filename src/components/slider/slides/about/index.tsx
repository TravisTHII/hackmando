import React from 'react'

import { Skills } from './Skills'

export const About = () => (
  <div id="about" className="slide about">
    <div className="slide_container">
      <div className="about_me_container flex_ui">
        <div className="about_me flex_ui white_border">
          <div className="am_header">
            <h1>Travis Hackney</h1>
            <p>Software Engineer</p>
          </div>
          <div className="am_picture">
            <img src="images/dev.png" alt="web developer" />
          </div>
          <div className="am_summary">
            <h2>Hello</h2>
            <p>
              I'm a full stack web developer. I have been developing
              applications since 2015, Implementing various technologies and
              philosophies, adapting new technologies as necessary as well as
              identifying, diagnosing and solving technical challenges.
            </p>
          </div>
          <ul className="am_skills">
            <Skills />
          </ul>
        </div>
      </div>
    </div>
  </div>
)
