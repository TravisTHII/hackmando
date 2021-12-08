import React from 'react'
import { IconContext } from 'react-icons'
import { RiLinkedinBoxFill, RiFileList3Line } from 'react-icons/ri'

import { ContactListItem } from './ContactListItem'

export const Contact = () => (
  <div id="contact" className="slide contact">
    <div className="slide_container">
      <IconContext.Provider
        value={{ color: '#fff', size: '9.375em', className: 'contact_icons' }}
      >
        <div className="contact_container flex_ui">
          <ul className="contact_list">
            <ContactListItem
              link="https://www.linkedin.com/in/travis-hackney-8b7805207/"
              name="LinkedIn"
            >
              <RiLinkedinBoxFill />
            </ContactListItem>
            <ContactListItem link="/resume.pdf" name="Resume">
              <RiFileList3Line />
            </ContactListItem>
          </ul>
        </div>
      </IconContext.Provider>
    </div>
  </div>
)
