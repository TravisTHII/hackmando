import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'
import { Card } from './Card'

export function Search() {

	const { state: { panels: { search } } } = useContext(GlobalContext)

	return (
		<Wrapper name="search" state={search.state}>
			<Card inverted={false}>
				<div className="grid-box-one card-ui">
					<div className="content_header">
						<h1>Search</h1>
						<p>Dynamic search and infinite scroll</p>
					</div>
				</div>
				<div className="grid-box-two card-ui">
					<h2>Image</h2>
				</div>
			</Card>
		</Wrapper>
	)
}