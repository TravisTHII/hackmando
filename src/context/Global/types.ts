export type InitialStateType = {
  opderPanels: () => void
  updatePanel: (panel: string) => void
} & State

export type State = {
  currentPanel: string
  panels: Panels
  projects: Project[]
}

export type Panels = {
  [key: string]: {
    state: boolean
    stack: number
    color: string
  }
}

export type Main = {
  panel: string
  color: string
}

export type Project = {
  panel: string
  title: string
  subTitle: string
  description: string
  bulletPoints: string[]
  projectUrl: string
  reversed: boolean
  image: string
  color: string
  builtWith: string[]
  clientLink: ClientLink
}

export type ClientLink = {
  name: string
  slug: string
  url: string
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