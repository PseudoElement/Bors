export type horizonCard = {
  name: string
  acronymName: string
  icon: string
  stockCost: number
  stockSum: number
  isBig: boolean
  onClick?: () => void
}

export type HorizonListProps = {
  cards: horizonCard[]
}
