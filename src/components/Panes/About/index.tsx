import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { ImFileText2 } from 'react-icons/im'

export const About = () =>
  <div className="container flex_ui">

    <div className="about_panel flex_ui">

      <div className="about_content">
        <a
          href="https://www.linkedin.com/in/travis-hackney-8b7805207/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <p>LinkedIn</p>
        </a>
        <a
          href="https://www.linkedin.com/in/travis-hackney-8b7805207/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImFileText2 />
          <p>Resume</p>
        </a>
      </div>

    </div>

  </div>