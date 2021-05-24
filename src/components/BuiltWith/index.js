import React from 'react'

import { Icon } from './Icon'

export const BuiltWith = ({ builtWith }) =>
  builtWith.map((t, i) => (
    <Icon key={i} name={t} />
  ))