import { FillRequest, Info, Intro, LeaderboardList, Sponsors } from 'features'

import { mock__leaderboard } from 'shared/mocks/mock_leaderboard'
import { mockInfoCardsData } from 'shared/mocks/infoCardsData'
import { mock__sponsors_card } from 'shared/mocks/mock_sponsors_cards'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { newUserRequested } from 'store/slices/userSlice'
import { UserAuthRequest } from '../../shared/types/user'
import { userAuth } from '../../shared/api/routes/user'

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
      dispatch(newUserRequested(data.data))
    } catch ({ error }) {
      console.error(error)
    }
  }

  useEffect(() => {
    createUser()
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
