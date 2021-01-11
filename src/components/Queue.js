import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export function Queue() {

	const { state: { panels: { queue } } } = useContext(GlobalContext)

	return (
		<div className={`queue panel${queue.state ? '' : ' hide_panel'}`}>
			<div className="container flex-ui">
				<h1>Queue</h1>
			</div>
		</div>
	)
}