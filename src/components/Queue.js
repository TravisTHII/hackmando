import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'

export function Queue() {

	const { state: { panels: { queue } } } = useContext(GlobalContext)

	return (
		<Wrapper name="queue" state={queue.state}>
			<h1>Queue</h1>
		</Wrapper>
	)
}