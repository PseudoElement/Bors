import { FC } from "react"

import { useAppSelector } from "shared/hooks/redux"

import s from './loginBtnText.module.scss'

export const LoginButtonText:FC = () => {
  const user = useAppSelector(state => state.user.user)
  return (
    <div className={s.textWrapper}>
      {user ? <div className={s.name}>{user.name}</div> : <p>Logga In</p>}
    </div>
  )
}

