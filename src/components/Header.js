import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../context/GlobalState'

import { FaCode, FaGithub } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'

export function Header() {

	const { state: { menuIsOpen }, openMenu } = useContext(GlobalContext)

	return (
		<header className="header">
			<div className="header_container flex-ui">
				<div className="logo">
					<Link to="/">
						<h1>HackManDo</h1>
					</Link>
				</div>
				<div className="icons_container">
					<a
						className="icon flex-ui"
						href="https://github.com/TravisTHII"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
					</a>
					<a
						className="icon flex-ui"
						href="https://github.com/TravisTHII/hackmando"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaCode />
					</a>
				</div>
				<div className="hamburger_menu flex-ui">
					<button
						className="burg_menu flex-ui"
						onClick={() => openMenu()}
					>
						{menuIsOpen
							? <CgClose />
							: <GiHamburgerMenu />
						}
					</button>
				</div>
			</div>
		</header>
	)
}