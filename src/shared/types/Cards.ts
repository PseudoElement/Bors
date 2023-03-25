import { horizonCard } from './horizonCards'
import { infoCardData } from './infoCards'

export type ComponentProps = {
  component: React.ComponentType<any>
  props: Record<string, any>
  classSection?: string
}

export type CardsType = {
  cards: horizonCard[] | infoCardData[]
}
