import React from 'react'
import { Link } from 'react-router-dom'

import MenuLink from './includes/MenuLinks'

export function Menu() {
	return (
		<div className="menu">
			<div className="menu_container">
				<ul className="menu_list">
					<li className="menu_item">
						<MenuLink name="Home" />
					</li>
					<li className="menu_item sub_menu">
						<span>
							<MenuLink name="Projects" />
						</span>
						<ul className="projects_list sub_list">
							<li>
								<Link
									to="/projects/comments"
									className="menu_link"
								>
									Comments
								</Link>
							</li>
							<li>
								<Link
									to="/projects/search"
									className="menu_link"
								>
									Search
								</Link>
							</li>
							<li>
								<Link
									to="/projects/queue"
									className="menu_link"
								>
									Queue
								</Link>
							</li>
							<li>
								<Link
									to="/projects/discover"
									className="menu_link"
								>
									Discover
								</Link>
							</li>
						</ul>
					</li>
					<li className="menu_item">
						<MenuLink name="About" />
					</li>
				</ul>
			</div>
		</div>
	)
}