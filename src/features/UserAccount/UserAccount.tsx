import { FC } from 'react'

import { UserAccountForm } from './UserAccountForm/UserAccountForm'
import { UserAccountHeader } from './UserAccountHeader/UserAccountHeader'

import s from './UserAccount.module.scss'

export const UserAccount: FC = () => {
  return (
    <div className={s.wrapper}>
      <UserAccountHeader></UserAccountHeader>

      <UserAccountForm></UserAccountForm>
    </div>
  )
}
