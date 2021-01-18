import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'
import { Card } from './Card'

import { Wrapper } from './Wrapper'

export function Comments() {

	const { state: { panels: { comments } } } = useContext(GlobalContext)

	return (
		<Wrapper name="comments" state={comments.state}>
			<Card inverted={true}>
				<div className="grid_content card-ui">
					<h2>React Commenting system</h2>
					<p>
						A thread & comment system built with React.

						Post and reply to comments
					</p>
				</div>
				<div className="grid_info card-ui">
					<h1>World</h1>
				</div>
			</Card>
		</Wrapper>
	)
}