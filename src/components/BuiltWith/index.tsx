import React from 'react'

import { Icon } from './Icon'

import { BuiltWithProps } from './types'

export const BuiltWith = ({ builtWith }: BuiltWithProps) =>
  <>
    {builtWith.map((t, i) => (
      <Icon key={i} name={t} />
    ))}
  </>