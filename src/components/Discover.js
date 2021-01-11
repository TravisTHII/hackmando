import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export function Discover() {

	const { state: { panels: { discover } } } = useContext(GlobalContext)

	return (
		<div className={`discover panel${discover.state ? '' : ' hide_panel'}`}>
			<div className="container flex-ui">
				<h1>Discover</h1>
			</div>
		</div>
	)
}