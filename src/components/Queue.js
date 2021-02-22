import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'
import { Card } from './Card'

export function Queue() {

	const { state: { panels: { queue } } } = useContext(GlobalContext)

	return (
		<Wrapper name="queue" state={queue.state}>
			<Card inverted={true}>
				<div className="grid-box-one card-ui">
					<div className="content_header">
						<h1>Queue</h1>
						<p>Quick content at a glance</p>
					</div>
				</div>
				<div className="grid-box-two card-ui">
					<h2>Image</h2>
				</div>
			</Card>
		</Wrapper>
	)
}