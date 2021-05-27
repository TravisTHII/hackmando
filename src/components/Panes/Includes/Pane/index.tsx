import React from 'react'

import { Props } from './types'

export function Pane({ children, panel }: Props) {
  return (
    <div
      className={`panel${panel.state ? '' : ' hide_panel'}`}
      style={{ zIndex: panel.stack, backgroundColor: panel.color }}
    >
      {children}
    </div>
  )
}