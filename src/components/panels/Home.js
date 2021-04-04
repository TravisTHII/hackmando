import React, { useContext } from 'react'
import { FaChevronDown, FaCss3, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiGraphql, SiJavascript, SiPhp, SiRedux } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'

import { GlobalContext } from '../../context/GlobalState'

import { Card } from '../Card'

export function Home() {

	const { state: { panels: { home } }, updatePanel } = useContext(GlobalContext)

	const seeProjects = () => {
		window.history.pushState({ panel: 'comments' }, '', '/projects/comments')

		updatePanel('comments')
	}

	return (
		<div className={`home panel${home.state ? '' : ' hide_panel'}`}>
			<div className="container flex_ui">

				<Card inverted={false}>

					<div className="grid_one card_ui">
						<div className="content_header">
							<h1>Travis Hackney</h1>
							<p>Javascript Developer</p>
						</div>
						<div className="content_image flex_ui">
							<div className="content_picture">
								<img
									src="../images/travis.jpg"
									alt="profile"
								/>
							</div>
						</div>
					</div>

					<div className="grid_two card_ui">
						<div className="home_card">
							<div className="card_header">
								<h2>Hello,</h2>
							</div>
							<div className="home_content">
								<p>
									I have been learning web development since as early as 2015,
									developing and building full stack applications.
								</p>
								<p>
									Interacting with a plethora of technologies and taking advantage
									of their quirks to solve application requirements is challenging and rewarding.
								</p>
								<p>
									I love how programming enables me to solve problems.
								</p>
							</div>
							<div className="card_tech flex_ui">
								<AiFillHtml5 className="skill_icon" title="HTML" />
								<FaCss3 className="skill_icon" title="CSS" />
								<SiJavascript className="skill_icon" title="Javascript" />
								<SiPhp className="skill_icon" title="PHP" />
								<FaReact className="skill_icon" title="React" />
								<SiRedux className="skill_icon" title="Redux" />
								<FaNodeJs className="skill_icon" title="Node.js" />
								<SiGraphql className="skill_icon" title="GraphQL" />
							</div>
						</div>
					</div>

				</Card>

				<div className="show_projects flex_ui">
					<button
						className="projects_btn"
						onClick={() => seeProjects()}
					>
						See projects
						<FaChevronDown />
					</button>
				</div>

			</div>
		</div>
	)
}