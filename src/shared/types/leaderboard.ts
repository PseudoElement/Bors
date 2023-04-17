import { User } from './user'

export type PropsLeaderboard = {
  buy_price: number
  created_at: string
  updated_at: string
  day: string
  id: number
  percentage: number
  price: number
  user: User
}

export interface LeaderList {
  date: string
  array: PropsLeaderboard[]
}