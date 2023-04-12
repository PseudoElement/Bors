import { useEffect } from 'react'
import { FillRequest, Info, Intro, LeaderboardList, Sponsors } from 'features'

import { mock__leaderboard } from 'shared/mocks/mock_leaderboard'
import { mockInfoCardsData } from 'shared/mocks/infoCardsData'
import { mock__sponsors_card } from 'shared/mocks/mock_sponsors_cards'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { logoutUserRequested, newUserRequested, userMeResponse } from 'store/slices/userSlice'
import { UserAuthRequest } from 'shared/types/user'
import { authMe, logoutAuth, userAuth } from 'shared/api/routes/user'
import { cookies } from 'shared/utils/Cookies'

export const MainPage = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)

  const authUserForms: UserAuthRequest = {
    email: 'germes955@gmail.com',
    password: 'iONYM0v',
  }

  const createUser = async () => {
    try {
      const data = await userAuth(authUserForms)

      cookies.set('token', data.data.data.access_token)

      dispatch(newUserRequested(data.data))
    } catch ({ error }) {
      console.error(error)
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
    createUser()
  }, [dispatch])

  useEffect(() => {
    getUser()
  }, [dispatch])

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
