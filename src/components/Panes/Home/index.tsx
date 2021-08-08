import React from 'react'

import { BuiltWith } from '../../BuiltWith'
import { Button } from './Button'

import { skills } from './skills'

export const Home = () => (
  <div className="panel_container">
    <div className="panel_content flex_ui">
      <div className="home_card">
        <div className="developer">
          <div className="developer_header">
            <h1>Travis Hackney</h1>
            <p>Web Developer</p>
          </div>
          <div className="developer_profile">
            <img
              src="../images/dev.png"
              alt="developer_profile"
              width="200"
              height="200"
            />
          </div>
        </div>

        <div className="developer_info">
          <div>
            <h2>Hello</h2>
          </div>
          <div className="content">
            <p>
              I have been learning web development since as early as 2015,
              developing and building full stack applications.
            </p>
            <p>
              Interacting with a plethora of technologies and taking advantage
              of their quirks to solve application requirements is challenging
              and rewarding.
            </p>
            <p>I love how programming enables me to solve problems.</p>
          </div>
          <div className="tech_stack">
            <BuiltWith builtWith={skills} />
          </div>
        </div>
      </div>
    </div>

    <Button />
  </div>
)
