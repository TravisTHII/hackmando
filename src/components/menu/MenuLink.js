import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../../context/GlobalState'

export function MenuLink({ name, slug, url, active }) {

	const { state: { currentPanel }, updatePanel } = useContext(GlobalContext)

	const newPanel = (e) => {
		if (/menu_active/.test(e.target.className))
			e.preventDefault()

		updatePanel(slug)
	}

	return (
		<Link
			to={url}
			className={`menu_link ${(currentPanel === slug || active) ? 'menu_active' : ''}`}
			onClick={newPanel}
		>
			{name}
		</Link>
	)
}