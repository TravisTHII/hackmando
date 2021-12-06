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
}
