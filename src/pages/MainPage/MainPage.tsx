import { useEffect, useState } from 'react'

import {
  FillRequest,
  Intro,
  LeaderboardList,
  Sponsors,
  InfoSection,
} from 'features'

import { getInfoCards } from 'shared/api/routes/main'

import { SiteData } from 'shared/types/site'
import { mock__leaderboard } from 'shared/mocks/mock_leaderboard'
import { mock__sponsors_card } from 'shared/mocks/mock_sponsors_cards'

export const MainPage = () => {
  const [infoCards, setInfoCards] = useState<SiteData | null>(null)

  const getInfo = async () => {
    try {
      const data = await getInfoCards()
      setInfoCards(data.data.data)

    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (infoCards) return
    getInfo()
  }, [])

  return (
    <>
      <Intro {...infoCards} />
      <InfoSection {...infoCards} />
      <LeaderboardList boards={mock__leaderboard} />
      <Sponsors cards={mock__sponsors_card} />
      <FillRequest />
    </>
  )
}
