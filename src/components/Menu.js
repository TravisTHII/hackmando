import React from 'react'

import MenuLink from './includes/MenuLinks'

export function Menu() {
	return (
		<div className="menu">
			<div className="menu_container">
				<ul className="menu_list">
					<li className="menu_item">
						<MenuLink name="Home" slug="home" />
					</li>
					<li className="menu_item sub_menu">
						<span>
							<MenuLink name="Projects" slug="projects" url="projects/comments" double={true} />
						</span>
						<ul className="projects_list sub_list">
							<li>
								<MenuLink name="Comments" slug="projects" url="projects/comments" />
							</li>
							<li>
								<MenuLink name="Search" slug="search" url="projects/search" />
							</li>
							<li>
								<MenuLink name="Queue" slug="queue" url="projects/queue" />
							</li>
							<li>
								<MenuLink name="Discover" slug="discover" url="projects/discover" />
							</li>
						</ul>
					</li>
					<li className="menu_item">
						<MenuLink name="About" slug="about" />
					</li>
				</ul>
			</div>
		</div>
	)
}