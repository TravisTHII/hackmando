import React from 'react'

export function Wrapper({ name, state, children }) {
	return (
		<div className={`${name} panel${state ? '' : ' hide_panel'}`}>
			<div className="container flex-ui">
				{children}
			</div>
		</div>
	)
}