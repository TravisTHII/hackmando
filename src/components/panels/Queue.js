import React, { useContext } from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

import { GlobalContext } from '../../context/GlobalState'

import { Card } from '../Card'

export function Queue() {

	const { state: { panels: { queue } } } = useContext(GlobalContext)

	return (
		<div className={`queue panel${queue.state ? '' : ' hide_panel'}`}>
			<div className="container flex_ui">

				<Card inverted={true}>

					<div className="grid_one card_ui">
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
						<div className="card_skills flex_ui">
							<FaReact className="skill_icon" title="React" />
							<SiJavascript className="skill_icon" title="Javascript" />
							<FaNodeJs className="skill_icon" title="Node.js" />
						</div>
					</div>

					<div className="grid_two card_ui">
						<h2>Image</h2>
					</div>

				</Card>

			</div>
		</div>
	)
}