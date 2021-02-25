import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState'

export function MobileMenu() {

	const { state: { menuIsOpen }, updatePanel, openMenu } = useContext(GlobalContext)

	const menu = [
		{ name: "Home", slug: "home", url: "/home" },
		{ name: "Comments", slug: "comments", url: "/projects/comments" },
		{ name: "Search", slug: "search", url: "/projects/search" },
		{ name: "Queue", slug: "queue", url: "/projects/queue" },
		{ name: "Discover", slug: "discover", url: "/projects/discover" },
		{ name: "About", slug: "about", url: "/about" },
	]

	const newPanel = (slug, url) => {
		window.history.pushState({ path: slug }, '', url)
		openMenu()
		updatePanel(slug)
	}

	return (
		<div className={`mobile_menu${menuIsOpen ? ' menu_open' : ''}`}>
			<div className="mm_container">
				<ul className="mm_list">
					{menu.map((m, i) => (
						<li
							key={i}
							className="mm_list_item"
							onClick={() => newPanel(m.slug, m.url)}
						>
							{m.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}