import { FC } from 'react'
import Image from 'next/image'

import { Navbar } from 'components/Navbar/Navbar'
import s from './header.module.scss'

interface Variant {
  variant: string
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
