import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import { Menu } from './Menu'

export const Mobile = () => {
  const [hidden, setHidden] = useState(true)

  return (
    <div className="mobile_header_container">
      <button className="line_menu_btn" onClick={() => setHidden(!hidden)}>
        <IconContext.Provider
          value={{
            color: '#fff',
            size: '1.875em',
            className: 'line_menu_icon',
          }}
        >
          {hidden ? <AiOutlineMenu /> : <AiOutlineClose />}
        </IconContext.Provider>
      </button>
      <div className="mobile_logo" onClick={() => setHidden(true)}>
        <Link to="/">
          <h1 className="logo">HackManDo</h1>
        </Link>
      </div>
      <Menu hidden={hidden} setHidden={setHidden} />
    </div>
  )
}
