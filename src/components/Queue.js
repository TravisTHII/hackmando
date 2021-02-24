import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'
import { Card } from './Card'

import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

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
					<div className="card_content">
						<p>
							Add content to your queue for quick viewing. with easy access
							to recent episodes.
						</p>
					</div>
					<div className="view_project">
						<a href="#" className="view_project-link">
							View Project
						</a>
					</div>
					<div className="card_skills flex-ui">
						<FaReact className="skill_icon" title="React" />
						<SiJavascript className="skill_icon" title="Javascript" />
						<FaNodeJs className="skill_icon" title="Node.js" />
					</div>
				</div>

				<div className="grid-box-two card-ui">
					<h2>Image</h2>
				</div>
			</Card>
			
		</Wrapper>
	)
}