import React from 'react'
import { Link } from 'react-router-dom'

export function NotFound() {
	return (
		<div className="container flex_ui">
			<div className="not_found_message">
				<h1>404 Not Found</h1>
				<p>
					The page you are looking for does not exist <Link to="/" className="go_home">Go Home.</Link>
				</p>
			</div>
		</div>
	)
}