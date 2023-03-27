import { FC, ReactNode } from 'react'

import { Footer } from 'features/Footer/Footer'
import { Header } from 'features/Header/Header'

import s from './layout.module.scss'

type PropsLayout = {
  children: string | ReactNode
}

export const Layout: FC<PropsLayout> = ({ children }) => {
  return (
    <>
      <Header variant='authorised' />
      {children}
      <Footer />
    </>
  )
}
