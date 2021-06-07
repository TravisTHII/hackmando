import { Panels, Project } from '../../types'

export type InitialStateType = {
  opderPanels: () => void
  updatePanel: (panel: string) => void
} & State

export type State = {
  currentPanel: string
  panels: Panels
  projects: Project[]
}

export enum DispatchName {
  ORDER_PANELS = 'ORDER_PANELS',
  UPDATE_PANEL = 'UPDATE_PANEL'
}

export type Action =
  | {
    type: DispatchName.ORDER_PANELS
    payload: { panel: string }
  }
  | {
    type: DispatchName.UPDATE_PANEL
    payload: { panel: string }
  }