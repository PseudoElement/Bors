import { FC } from 'react'

import {
  FillRequest,
  Intro,
  LeaderboardList,
  Sponsors,
  InfoSection,
} from 'features'

import { SiteData, SponsorType } from 'shared/types/site'
import { PropsLeaderboard } from 'shared/types/leaderboard'
import { mock__leaderboard } from 'shared/mocks/mock_leaderboard'

export interface MainPageProps {
  infoCards: SiteData
  sponsorsCards: SponsorType[]
  leadersList: PropsLeaderboard[][]
}
export const MainPage: FC<MainPageProps> = ({
  infoCards,
  sponsorsCards,
  leadersList,
}) => {

  return (
    <>
      <Intro {...infoCards} />
      <InfoSection {...infoCards} />
      <LeaderboardList boards={mock__leaderboard} />
      {sponsorsCards ? <Sponsors cards={sponsorsCards} /> : null}
      <FillRequest />
    </>
  )
}
