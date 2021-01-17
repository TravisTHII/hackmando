import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'

export function Projects() {

	const { state: { panels: { projects } } } = useContext(GlobalContext)

	return (
		<Wrapper name="projects" state={projects.state}>
			<h1>Comments</h1>
		</Wrapper>
	)
}