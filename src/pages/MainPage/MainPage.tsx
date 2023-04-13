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

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import {
  logoutUserRequested,
  newUserRequested,
  userMeResponse,
} from 'store/slices/userSlice'
import { UserAuthRequest } from 'shared/types/user'
import { authMe, logoutAuth, userAuth } from 'shared/api/routes/user'
import { cookies } from 'shared/utils/Cookies'

export const MainPage = () => {
  const [infoCards, setInfoCards] = useState<SiteData | null>(null)
  const dispatch = useAppDispatch()

  const getInfo = async () => {
    try {
      const data = await getInfoCards()
      setInfoCards(data.data.data)
    } catch (e) {
      console.error(e)
    }
  }

  const getUser = async () => {
    try {
      const data = await authMe()

      dispatch(userMeResponse(data.data))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // createUser()
  }, [dispatch])

  useEffect(() => {
    if (infoCards) return
    getInfo()
  }, [])

  return (
    <>
      {infoCards ? (
        <>
          <Intro {...infoCards} />
          <InfoSection {...infoCards} />
        </>
      ) : null}
      <LeaderboardList boards={mock__leaderboard} />
      <Sponsors cards={mock__sponsors_card} />
      <FillRequest />
    </>
  )
}
