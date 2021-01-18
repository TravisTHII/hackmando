import React from 'react'

export function Card({ inverted, children }) {
	return (
		<div className={`card ${inverted ? 'grid-reverse' : 'grid-normal'}`}>
			{children}
		</div>
	)
}