export interface IInputSearch {
  onChange: (e: any) => void
}

export interface ILandCard {
  pic: string,
  title: string,
  type: string,
  year: string,
}

export interface ILayout {
  children?: ReactNode
}
