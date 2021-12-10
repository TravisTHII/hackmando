import React from 'react'

import { Skills } from './Skills'

export const About = () => (
  <div id="about" className="slide about">
    <div className="slide_container">
      <div className="about_me_container flex_ui">
        <div className="about_me flex_ui white_border">
          <div className="am_header">
            <h1>Travis Hackney</h1>
            <p>Web Developer</p>
          </div>
          <div className="am_picture">
            <img src="images/dev.png" alt="web developer" />
          </div>
          <div className="am_summary">
            <h2>Hello</h2>
            <p>
              As a web developer since 2015, I'm a natural self-starter.
              Initially starting out with the PHP server-side programming
              language before embracing more contemporary technologies, I am
              constantly expanding my knowledge of programming as well as the
              industry that encompasses it.
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
