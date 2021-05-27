import { ReactNode } from 'react'

export interface Props {
  children: ReactNode
  panel: {
    color: string
    stack: number
    state: boolean
  }
}