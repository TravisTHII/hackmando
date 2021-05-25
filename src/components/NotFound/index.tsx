import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function NotFound() {

  useEffect(() => {
    const x = document.querySelector('.header')

    x?.classList.add('is_not_found')

    return () => x?.classList.remove('is_not_found')
  }, [])

  return (
    <div id="not_found">
      <div className="container flex_ui">
        <div className="not_found_message">
          <h1>404 Not Found</h1>
          <p>
            The page you are looking for does not exist <Link to="/" className="go_home">Go Home.</Link>
          </p>
        </div>
      </div>
    </div>
  )
}