import React from 'react'

import { MenuLink } from './MenuLink'
import { SubMenuLink } from './SubMenuLink'

export function SubMenu() {

	const sub = [
		{ name: "Comments", slug: "comments", url: "/projects/comments" },
		{ name: "Search", slug: "search", url: "/projects/search" },
		{ name: "Queue", slug: "queue", url: "/projects/queue" },
		{ name: "Discover", slug: "discover", url: "/projects/discover" }
	]

	const w = /\/projects\/(\w+)/.test(window.location.pathname)

	return (
		<li className="menu_item sub_menu">
			<span>
				<MenuLink name="Projects" slug="comments" url="/projects/comments" active={w} />
			</span>
			<ul className="projects_list sub_list">
				{sub.map((s, i) => (
					<SubMenuLink key={i} name={s.name} slug={s.slug} url={s.url} />
				))}
			</ul>
		</li>
	)
}