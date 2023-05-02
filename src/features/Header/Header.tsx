import { FC } from 'react'

import { Navbar } from 'components'

import s from './header.module.scss'

interface Variant {
  variant: boolean
}

export const Header: FC<Variant> = ({ variant }) => {
  return (
    <header className={s.header} id='header'>
      <div className={s.headerWrapper}>
        <Navbar variant={variant} />
      </div>
    </header>
  )
}
