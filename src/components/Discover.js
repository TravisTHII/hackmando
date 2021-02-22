import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'
import { Card } from './Card'

export function Discover() {

	const { state: { panels: { discover } } } = useContext(GlobalContext)

	return (
		<Wrapper name="discover" state={discover.state}>
			<Card inverted={false}>
				<div className="grid-box-one card-ui">
					<div className="content_header">
						<h1>Discover</h1>
						<p>Sort and filter content to your specifications</p>
					</div>
				</div>
				<div className="grid-box-two card-ui">
					<h2>Image</h2>
				</div>
			</Card>
		</Wrapper>
	)
}