import { FC } from 'react'
import { EventSection, FillRequest, Info, Intro, LeaderboardList } from 'features'
import { event_slider_mock } from 'shared/mocks/mock_event_slider'
import { mock__leaderboard } from 'shared/mocks/mock_leaderboard'
import { mockInfoCardsData } from 'shared/mocks/infoCardsData'

export const MainPage: FC = () => {
  return (
    <>
      <Intro />
      <Info cards={mockInfoCardsData}></Info>
      <EventSection title='EVENTS' cards={event_slider_mock} />
      <LeaderboardList boards={mock__leaderboard} />
      <FillRequest />
    </>
  )
}
