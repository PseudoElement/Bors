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
      <button className={s.burger}>
        <Image
          src='/assets/icons/hamburger.svg'
          width={33.33}
          height={20.83}
          alt='burger menu'
        />
      </button>
      <Navbar variant={variant} />
    </header>
  )
}
