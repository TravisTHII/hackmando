import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import { Wrapper } from './Wrapper'

import { FaLinkedin } from 'react-icons/fa'
import { ImFileText2 } from 'react-icons/im'

export function About() {

	const { state: { panels: { about } } } = useContext(GlobalContext)

	return (
		<Wrapper name="about" state={about.state}>
			<div className="about_panel flex-ui">

				<div className="am_container">
					<a
						className="am_link"
						href="https://www.linkedin.com/in/travis-hackney-8b7805207/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin />
						<p className="aml_text">LinkedIn</p>
					</a>
					<a
						className="am_link"
						href="#"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ImFileText2 />
						<p className="aml_text">Resume</p>
					</a>
				</div>

			</div>

			<div className="tag-line">
				<p title="HackManDo, portfolio">
					{`HackManDo © ${new Date().getFullYear()}`}
				</p>
			</div>
		</Wrapper>
	)
}