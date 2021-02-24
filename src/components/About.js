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
					<a href="#" className="am_link">
						<FaLinkedin />
						<p className="aml_text">LinkedIn</p>
					</a>
					<a href="#" className="am_link">
						<ImFileText2 />
						<p className="aml_text">Resume</p>
					</a>
				</div>

				<div className="tag-line">
					<p title="HackManDo, portfolio">
						{`HackManDo © ${new Date().getFullYear()}`}
					</p>
				</div>

			</div>
		</Wrapper>
	)
}