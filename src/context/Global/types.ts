import { Panels, Project } from '../../types'

export type InitialStateType = {
  orderPanels: () => void
  updatePanel: (panel: string) => void
  openMenu: () => void
} & State

export type State = {
  currentPanel: string
  panels: Panels
  projects: Project[]
  modalOpen: boolean
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
      payload: { modalOpen: boolean }
    }
