import { horizonCard } from './horizonCards'

export type ComponentProps = {
  component: React.ComponentType<any>
  props: Record<string, any>
  classSection?: string
}

export type CardsType = {
  cards: any[]
}
