import { FC } from 'react'

import { Navbar } from 'components/Navbar/Navbar'

import s from './header.module.scss'
interface Variant {
  variant: boolean
}

export const Header: FC<Variant> = ({ variant }) => {
  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <Navbar variant={variant} />
      </div>
    </header>
  )
}
