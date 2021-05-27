import React from 'react'

import { BuiltWith } from '../../BuiltWith'
import { Button } from './Button'

import { skills } from './skills'

export const Home = () =>
  <div className="container flex_ui">

    <div className="card grid_normal">

      <div className="grid_one card_ui">
        <div className="content_header">
          <h1>Travis Hackney</h1>
          <p>Javascript Developer</p>
        </div>
        <div className="content_image flex_ui">
          <div className="content_picture">
            <img
              src="../images/travis.jpg"
              alt="profile"
            />
          </div>
        </div>
      </div>

      <div className="grid_two card_ui">
        <div className="home_card">
          <div className="card_header">
            <h2>Hello,</h2>
          </div>
          <div className="home_content">
            <p>
              I have been learning web development since as early as 2015,
              developing and building full stack applications.
          </p>
            <p>
              Interacting with a plethora of technologies and taking advantage
              of their quirks to solve application requirements is challenging and rewarding.
          </p>
            <p>
              I love how programming enables me to solve problems.
          </p>
          </div>
          <div className="card_tech">
            <BuiltWith builtWith={skills} />
          </div>
        </div>
      </div>

    </div>

    <Button />

  </div>