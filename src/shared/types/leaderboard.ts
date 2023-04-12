export type PropsLeaderboard = {
  id: number | string
  user: {
    name: string
    avatarUrl: string
  }
  position: string
  tempyield: number
  amountOfIncome: string
}

export type PropsLeaderboardList = {
  boards: PropsLeaderboard[]
}
