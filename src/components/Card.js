import React from 'react'

export function Card({ inverted, children }) {
  return (
    <div className={`card ${inverted ? 'grid_reverse' : 'grid_normal'}`}>
      {children}
    </div>
  )
}