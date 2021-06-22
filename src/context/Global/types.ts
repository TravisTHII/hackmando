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

export enum Dispatch {
  ORDER_PANELS = 'ORDER_PANELS',
  UPDATE_PANEL = 'UPDATE_PANEL',
  OPEN_MENU = 'OPEN_MENU',
}

export type Action =
  | {
    type: Dispatch.ORDER_PANELS
    payload: { panel: string }
  }
  | {
    type: Dispatch.UPDATE_PANEL
    payload: { panel: string }
  }
  | {
    type: Dispatch.OPEN_MENU,
    payload: { modelOpen: boolean }
  }