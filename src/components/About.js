import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export function About() {

	const { state: { panels: { about } } } = useContext(GlobalContext)

	return (
		<div className={`about panel${about ? '' : ' hide_panel'}`}>
			<div className="container flex-ui">

			</div>
		</div>
	)
}