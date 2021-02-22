import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'
import { Card } from './Card'

export function Comments() {

	const { state: { panels: { comments } } } = useContext(GlobalContext)

	return (
		<Wrapper name="comments" state={comments.state}>
			<Card inverted={true}>
				<div className="grid-box-one card-ui">
					<div className="content_header">
						<h1>Comments</h1>
						<p>Feature rich commenting to engage with your community</p>
					</div>
				</div>
				<div className="grid-box-two card-ui">
					<h2>Image</h2>
				</div>
			</Card>
		</Wrapper>
	)
}