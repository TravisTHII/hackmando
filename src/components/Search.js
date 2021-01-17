import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'

export function Search() {

	const { state: { panels: { search } } } = useContext(GlobalContext)

	return (
		<Wrapper name="search" state={search.state}>
			<h1>Search</h1>
		</Wrapper>
	)
}