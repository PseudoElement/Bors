export interface Events {
  id: number
  image: string
  month: string
  day: string
  title: string
  description: string
  btnTitle: string
}

export interface EventsList {
  cards: Events[]
}
