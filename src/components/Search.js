import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export function Search() {

	const { state: { panels: { search } } } = useContext(GlobalContext)

	return (
		<div className={`search panel${search.state ? '' : ' hide_panel'}`}>
			<div className="container flex-ui">
				<h1>Search</h1>
			</div>
		</div>
	)
}