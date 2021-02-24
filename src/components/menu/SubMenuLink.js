import React from 'react'

import { MenuLink } from './MenuLink'

export function SubMenuLink({ name, slug, url }) {
	return (
		<li className="menu_link-sub">
			<MenuLink name={name} slug={slug} url={url} />
		</li>
	)
}