import { FC, useEffect } from 'react'

import { UserAccountForm } from './UserAccountForm/UserAccountForm'
import { UserAccountHeader } from './UserAccountHeader/UserAccountHeader'

import { authMe, userAvatar } from 'shared/api/routes/user'
import { userMeResponse } from 'store/slices/userSlice'
import { useAppDispatch } from 'shared/hooks/redux'

import s from './UserAccount.module.scss'

export const UserAccount: FC = () => {
  const dispatch = useAppDispatch()

  const getUser = async () => {
    try {
      const data = await authMe()
      dispatch(userMeResponse(data.data))
    } catch (error) {
      console.error(error)
    }
  }

  const changeAvatar = async (avatar: File) => {
    try {
      await userAvatar(avatar)
      await getUser()
    } catch (error) {
      console.error('error from changeAvatar ', error)
    }
  }

  useEffect(() => {
    getUser()
  }, [dispatch])

  return (
    <div className={s.outerWrapper}>
      <div className={s.wrapper}>
        <UserAccountHeader changeAvatar={changeAvatar} />
        <UserAccountForm />
      </div>
    </div>
    
  )
}
