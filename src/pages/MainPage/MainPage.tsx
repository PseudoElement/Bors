import { FC } from 'react'

import {
  FillRequest,
  Intro,
  LeaderboardList,
  Sponsors,
  InfoSection,
} from 'features'

import { SiteData, SponsorType } from 'shared/types/site'
import { LeaderList } from 'shared/types/leaderboard'

export interface MainPageProps {
  infoCards: SiteData
  sponsorsCards: SponsorType[]
  leadersList: LeaderList[]
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
      {leadersList?.length ? (
        <LeaderboardList leadersList={leadersList} />
      ) : null}
      {sponsorsCards?.length ? <Sponsors cards={sponsorsCards} /> : null}
      <FillRequest />
    </>
  )
}
