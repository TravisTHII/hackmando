import React, { useContext } from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

import { GlobalContext } from '../../context/GlobalState'

import { Card } from '../Card'

export function Search() {

	const { state: { panels: { search } } } = useContext(GlobalContext)

	return (
		<div className={`search panel${search.state ? '' : ' hide_panel'}`}>
			<div className="container flex_ui">

				<Card inverted={false}>

					<div className="grid_one card_ui">
						<div className="content_header">
							<h1>Search</h1>
							<p>Dynamic search with infinite scroll</p>
						</div>
						<div className="card_content">
							<p>
								Quickly find what your looking for.
						</p>
							<p>
								Dynamic search with infinite scroll to load more content.
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