import { Project } from '../../types'

export type State = {
  view: string
  projects: Project[]
}

export type Action = {
  type: 'CHANGE_VIEW'
  payload: { view: string }
}

export type InitialStateType = {
  changeView: (view: string) => void
} & State
