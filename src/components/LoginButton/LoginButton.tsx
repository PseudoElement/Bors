import { FC } from 'react'
import Image from 'next/image'

import { useAppSelector } from 'shared/hooks/redux'
import AccountImg from '/public/assets/icons/accountImg.svg'

import s from './loginButton.module.scss'

export interface LoginBtnProps {
  classNames?: string
  btnClick: () => void
}

export const LoginButton: FC<LoginBtnProps> = ({ btnClick }) => {
  const user = useAppSelector(state => state.user.user)

  return (
    <button onClick={btnClick} className={s.logInButton}>
      <div className={s.btnImg}>
        {user ? (
          <Image
            className={s.avatar}
            src={user.avatar}
            width={44}
            height={44}
            alt='avatar'
          />
        ) : (
          <AccountImg />
        )}
      </div>

      <div className={s.textWrapper}>
        <div className={s.name}>{user ? user.name : 'LOGGA IN'}</div>
      </div>
    </button>
  )
}
