import { Project } from '../../types'

export type State = {
  view: string
  projects: Project[]
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
      type: 'MOVE'
      payload: { page: number }
    }
  | {
      type: 'RESET_CAROUSEL'
      payload: {
        page: number
        offset: number
      }
    }

export type InitialStateType = {
  changeView: (view: string) => void
  traverseCarousel: (page: number) => void
  resetCarousel: () => void
} & State
