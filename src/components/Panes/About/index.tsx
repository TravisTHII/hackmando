import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { ImFileText2 } from 'react-icons/im'

export const About = () => (
  <div className="panel_container">
    <div className="panel_content flex_ui">
      <div className="about_panel flex_ui">
        <div className="about_content">
          <a
            href="https://www.linkedin.com/in/travis-hackney-8b7805207/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex_ui">
              <FaLinkedin />
            </span>
            <p>LinkedIn</p>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <span className="flex_ui">
              <ImFileText2 />
            </span>
            <p>Resume</p>
          </a>
        </div>
      </div>
    </div>
  </div>
)
