import React from 'react'

import { MenuLink } from './MenuLink'

export function SubMenuLink({ name, slug, url }) {
	return (
		<li>
			<MenuLink name={name} slug={slug} url={url} />
		</li>
	)
}