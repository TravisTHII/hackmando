import React, { useContext } from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

import { GlobalContext } from '../../context/GlobalState'

import { Card } from '../Card'

export function Comments() {

	const { state: { panels: { comments } } } = useContext(GlobalContext)

	return (
		<div className={`comments panel${comments.state ? '' : ' hide_panel'}`}>
			<div className="container flex-ui">

				<Card inverted={false}>

					<div className="grid-box-one card-ui">
						<div className="content_header">
							<h1>Comments</h1>
							<p>Simple commenting application</p>
						</div>
						<div className="card_content">
							<p>
								light weight, Fully functional, dynamic comments built with react.
								engage with users, comment on posts and enjoy fun conversations.
						</p>
						</div>
						<div className="view_project">
							<a
								href="https://react-comments.netlify.app"
								target="_blank"
								rel="noopener noreferrer"
								className="view_project-link"
							>
								View Project
							</a>
						</div>
						<div className="card_skills flex-ui">
							<FaReact className="skill_icon" title="React" />
							<SiJavascript className="skill_icon" title="Javascript" />
							<FaNodeJs className="skill_icon" title="Node.js" />
						</div>
					</div>

					<div className="grid-box-two">
						<div
							className="card-image"
							role="img" 
							aria-label="react comments project"
							style={{ backgroundImage: 'url(../images/react-comments.png)' }}
						>
						</div>
					</div>

				</Card>

			</div>
		</div>
	)
}