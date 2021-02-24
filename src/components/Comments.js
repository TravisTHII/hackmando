import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'
import { Card } from './Card'

import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

export function Comments() {

	const { state: { panels: { comments } } } = useContext(GlobalContext)

	return (
		<Wrapper name="comments" state={comments.state}>

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