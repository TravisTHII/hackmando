import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export function Projects() {

	const { state: { panels: { projects } } } = useContext(GlobalContext)

	return (
		<div className={`projects panel${projects.state ? '' : ' hide_panel'}`}>
			<div className="container flex-ui">

			</div>
		</div>
	)
}