import React from 'react'
import { Link } from 'react-router-dom'

import Svg from '../../svg/not_found.svg'

export const NotFound = () => (
  <div id="not_found">
    <div className="not_found_container">
      <div className="not_found_message">
        <div className="not_found_header">
          <h1>404 Not Found</h1>
          <p>
            The page you are looking for does not exist,{' '}
            <Link to="/" className="underline">
              Go Home
            </Link>
          </p>
        </div>
        <div className="not_found_image">
          <img src={Svg} alt="not found tree" />
        </div>
      </div>
    </div>
  </div>
)
