import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../../context/GlobalState'

export default function MenuLink({ name }) {

	const { state: { currentPanel }, updatePanel } = useContext(GlobalContext)

	const slug = name.toLowerCase()

	return (
		<Link
			to={`/${slug}`}
			className={`menu_link ${currentPanel === slug ? 'menu_active' : ''}`}
			onClick={() => updatePanel(slug)}
		>
			{name}
		</Link>
	)
}