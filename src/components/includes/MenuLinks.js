import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../../context/GlobalState'

export default function MenuLink({ name, slug, url, double }) {

	const { state: { currentPanel }, updatePanel } = useContext(GlobalContext)

	const compoundUrl = window.location.pathname.includes(slug)

	const update = (e) => {

		if (/menu_active/.test(e.target.className))
			e.preventDefault()

		updatePanel(slug)

	}

	return (
		<Link
			to={`/${url || slug}`}
			className={`menu_link ${((double && compoundUrl) || (currentPanel === slug)) ? 'menu_active' : ''}`}
			onClick={update}
		>
			{name}
		</Link>
	)
}