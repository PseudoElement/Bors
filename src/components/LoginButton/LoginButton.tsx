import { FC } from 'react'

import { useAppSelector } from 'shared/hooks/redux'

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
        {user?.avatar ? (
          <div
            className={s.userAvatar}
            style={{ backgroundImage: `url("${user.avatar}")` }}
          />
        ) : (
          <div className={s.defaultAvatar} />
        )}
      </div>

      <div className={s.textWrapper}>
        <div className={s.name}>
          {user ? <span>{user.name}</span> : <span>LOGGA IN</span>}
        </div>
      </div>
    </button>
  )
}
