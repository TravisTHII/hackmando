import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'

import { FaChevronDown } from 'react-icons/fa'

export function Home() {

	const { state: { panels: { home } }, updatePanel } = useContext(GlobalContext)

	const seeProjects = () => {
		window.history.pushState({ panel: 'projects' }, '', '/projects/comments')

		updatePanel('projects')
	}

	return (
		<Wrapper name="home" state={home.state}>

			<div className="card">
				<div className="aboutme card-ui">
					<div className="aboutme_header">
						<h1>Travis Hackney</h1>
						<p>Javascript Developer</p>
					</div>
					<div className="aboutme_image flex-ui">
						<div className="profile-picture">
							<img
								src="../images/travis.jpg"
								alt="profile"
							/>
						</div>
					</div>
				</div>

				<div className="info card-ui">
					<div className="info_header">
						<h2>Hello, I'm Travis</h2>
					</div>
					<div className="info_content">
						<p>
							I've been learning web development since as early as 2015
							developing and building full stack applications.
							</p>
						<p>
							I love programming and the challenges that come with it.
							</p>
					</div>
					<div className="info_footer">

					</div>
				</div>
			</div>

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