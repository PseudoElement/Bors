import {FilterMeta, MinMax} from '../types/stocks'

export const mock_by_line_of_business = [
  'Metallurgisk industri',
  'Tung industri',
  'Olje- och gasgruvindustrin',
  'Telekommunikation',
  'Farmaceutik och medicin',
  'IT',
  'Konsumentvaror och detaljhandelskedjor',
]

export const mock_min_max_popularity: FilterMeta[] = [
  { label: 'Köp Populära', value: null },
  { label: 'Mest populär', value: MinMax.Mest },
  { label: 'Minst populär', value: MinMax.Minst },
]

export const mock_min_max_price: FilterMeta[] = [
  { label: 'Efter pris', value: null },
  { label: 'Mest populär', value: MinMax.Mest },
  { label: 'Minst populär', value: MinMax.Minst },
]
