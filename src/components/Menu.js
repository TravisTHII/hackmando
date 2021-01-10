import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../context/GlobalState'

export function Menu() {

	const { updatePanel } = useContext(GlobalContext)

	return (
		<div className="menu">
			<div className="menu_container">
				<ul className="menu_list">
					<li className="menu_item">
						<Link
							to="/home"
							className="menu_link menu_active"
							onClick={() => updatePanel('home')}
						>
							Home
						</Link>
					</li>
					<li className="menu_item sub_menu">
						<span>
							<Link
								to="/projects"
								className="menu_link"
								onClick={() => updatePanel('projects')}
							>
								Projects
							</Link>
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
						<Link
							to="/about"
							className="menu_link"
							onClick={() => updatePanel('about')}
						>
							About
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}