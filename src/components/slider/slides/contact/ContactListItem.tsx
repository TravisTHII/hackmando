import React from 'react'

interface Props {
  name: string
  link: string
}

export const ContactListItem: React.FC<Props> = ({ children, name, link }) => (
  <li className="contact_item white_border">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex_ui"
    >
      <div className="contact_item_container flex_ui">
        <div>{children}</div>
        <div className="contact_p">
          <p>{name}</p>
        </div>
      </div>
    </a>
  </li>
)
