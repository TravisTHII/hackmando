import { Project } from '../../types'

export type State = {
  view: string
  projects: Project[]
  color: string
  page: number
  last: number
  move: number
  offset: number
}

export type Action =
  | {
      type: 'CHANGE_VIEW'
      payload: { view: string }
    }
  | {
      type: 'TRAVERSE_CAROUSEL'
      payload: { page: number }
    }
  | {
      type: 'RESET_CAROUSEL'
      payload: { page: number; offset: number }
    }
  | {
      type: 'CHANGE_COLOR'
      payload: { color: string }
    }

export type InitialStateType = {
  changeView: (view: string) => void
  traverseCarousel: (page: number) => void
  resetCarousel: () => void
  changeColor: (color: string) => void
} & State
