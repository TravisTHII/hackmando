export interface PanelsProps {
  location: {
    pathname: string
  }
}

export interface ProjectProps {
  panel: string
  title: string
  subTitle: string
  description: string
  bulletPoints: string[]
  projectUrl: string
  reversed: boolean
  image: string
  builtWith: string[]
}