import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'

export function About() {

	const { state: { panels: { about } } } = useContext(GlobalContext)

	return (
		<Wrapper name="about" state={about.state}>
			<h1>About</h1>
		</Wrapper>
	)
}