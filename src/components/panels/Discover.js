import React, { useContext } from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

import { GlobalContext } from '../../context/GlobalState'

import { Card } from '../Card'

export function Discover() {

	const { state: { panels: { discover } } } = useContext(GlobalContext)

	return (
		<div className={`discover panel${discover.state ? '' : ' hide_panel'}`}>
			<div className="container flex_ui">

				<Card inverted={true}>

					<div className="grid_one card_ui">
						<div className="content_header">
							<h1>Discover</h1>
							<p>Sort and filter content to your specifications</p>
						</div>
						<div className="card_content">
							<p>
								Discover what your're looking for by filtering
								content by various tags.
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