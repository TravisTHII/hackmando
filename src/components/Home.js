import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'
import { Card } from './Card'

import { FaChevronDown, FaCss3, FaPhp, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'

export function Home() {

	const { state: { panels: { home } }, updatePanel } = useContext(GlobalContext)

	const seeProjects = () => {
		window.history.pushState({ panel: 'comments' }, '', '/projects/comments')

		updatePanel('comments')
	}

	return (
		<Wrapper name="home" state={home.state}>

			<Card inverted={false}>
				<div className="grid-box-one aboutme card-ui">
					<div className="content_header">
						<h1>Travis Hackney</h1>
						<p>Javascript Developer</p>
					</div>
					<div className="content_image flex-ui">
						<div className="content-picture">
							<img
								src="../images/travis.jpg"
								alt="profile"
							/>
						</div>
					</div>
				</div>

				<div className="grid-box-two info card-ui">
					<div className="home-card">
						<div className="card_header">
							<h2>Hello</h2>
						</div>
						<div className="card_content">
							<p>
								I've been learning web development since as early as 2015
								developing and building full stack applications.
							</p>
							<p>
								Interacting with a plethora of technologies and taking advantage
								of their quirks to solve application requirements is fun and rewarding.
							</p>
							<p>
								I love programming and the challenges that come with it.
							</p>
						</div>
						<div className="card_skills flex-ui">
							<FaReact className="skill_icon" />
							<FaPhp className="skill_icon" />
							<SiJavascript className="skill_icon" />
							<FaCss3 className="skill_icon" />
							<AiFillHtml5 className="skill_icon" />
						</div>
					</div>
				</div>
			</Card>

			<div className="show_projects flex-ui">
				<button
					className="projects_btn"
					onClick={() => seeProjects()}
				>
					See projects
						<FaChevronDown />
				</button>
			</div>

		</Wrapper>
	)
}