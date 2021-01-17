import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'

export function Discover() {

	const { state: { panels: { discover } } } = useContext(GlobalContext)

	return (
		<Wrapper name="discover" state={discover.state}>
			<h1>Discover</h1>
		</Wrapper>
	)
}