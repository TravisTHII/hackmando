import React, { useContext } from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'

import { GlobalContext } from '../../context/GlobalState'

import { Card } from '../Card'

export function Comments() {

	const { state: { panels: { comments } } } = useContext(GlobalContext)

	return (
		<div className={`comments panel${comments.state ? '' : ' hide_panel'}`}>
			<div className="container flex-ui">

				<Card inverted={false}>

					<div className="grid-box-one card-ui flex-column">
						<div className="content_header">
							<h1>React Comments</h1>
							<p>Dynamic commenting application</p>
						</div>
						<div className="card_content text-ui">
							<p className="center-text">
								Simple, Fully featured, comments built with react.
								engage with users, comment on posts and enjoy fun conversations.
							</p>
							<ul>
								<li>Multiple threads to organize discussions</li>
								<li>Post & Reply to comments</li>
								<li>Pin comments to top of threads</li>
								<li>Cursor based pagination</li>
								<li>Choose from multiple users</li>
								<li>Jwt for simple authentication</li>
								<li>MongoDB, NoSQL backend</li>
							</ul>
						</div>
						<div>
							<div className="flex-ui">
								<FaReact className="skill_icon" title="React" />
								<SiMongodb className="skill_icon" title="MongoDB" />
								<FaNodeJs className="skill_icon" title="Node.js" />
							</div>
						</div>
					</div>

					<div className="grid-box-two">
						<div className="project-image">
							<a
								href="https://react-comments.netlify.app"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src="../images/react-comments.png" alt="react comments project" />
							</a>
						</div>
					</div>

				</Card>

			</div>
		</div>
	)
}