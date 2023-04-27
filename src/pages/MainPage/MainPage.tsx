import { FC, useState } from 'react'

import {
  FillRequest,
  Intro,
  LeaderboardList,
  Sponsors,
  InfoSection,
  PopupAfterSubmit,
} from 'features'

import { SiteData, SponsorType } from 'shared/types/site'
import { LeaderList } from 'shared/types/leaderboard'
import { PopupAfterSubmitStatus } from 'shared/enums'
import FAQ from 'features/FAQ/FAQ'

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

  const [popupStatus, setPopupStatus] = useState<PopupAfterSubmitStatus>(
    PopupAfterSubmitStatus.CLOSED
  )

  return (
    <>
      <Intro {...infoCards} />
      <InfoSection {...infoCards} />
      {leadersList?.length ? (
        <LeaderboardList leadersList={leadersList} />
      ) : null}
      {sponsorsCards?.length ? <Sponsors cards={sponsorsCards} /> : null}
      <FAQ />
      <FillRequest setPopupStatus={setPopupStatus} />
      <PopupAfterSubmit
        onClose={() => setPopupStatus(PopupAfterSubmitStatus.CLOSED)}
        status={popupStatus}
        type='sendEmail'
      />
      
    </>
  )
}
