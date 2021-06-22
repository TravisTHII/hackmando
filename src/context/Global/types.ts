import { Panels, Project } from '../../types'

export type InitialStateType = {
  opderPanels: () => void
  updatePanel: (panel: string) => void
  openMenu: () => void
} & State

export type State = {
  currentPanel: string
  panels: Panels
  projects: Project[]
  modelOpen: boolean
}

export type Action =
  | {
    type: 'ORDER_PANELS'
    payload: { panel: string }
  }
  | {
    type: 'UPDATE_PANEL'
    payload: { panel: string }
  }
  | {
    type: 'OPEN_MENU'
    payload: { modelOpen: boolean }
  }