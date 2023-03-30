import {
  EventSection,
  FillRequest,
  Info,
  Intro,
  LeaderboardList,
  Sponsors,
} from 'features'

import { mock__leaderboard } from 'shared/mocks/mock_leaderboard'
import { mockInfoCardsData } from 'shared/mocks/infoCardsData'
import { mock__sponsors_card } from 'shared/mocks/mock_sponsors_cards'

export const MainPage = () => {
  return (
    <>
      <Intro />
      <Info cards={mockInfoCardsData} />
      <LeaderboardList boards={mock__leaderboard} />
      <Sponsors cards={mock__sponsors_card} />
      <FillRequest />
    </>
  )
}
